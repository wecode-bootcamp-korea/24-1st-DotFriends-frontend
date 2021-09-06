import React, { Component } from 'react';
import Filters from './component/Filters/Filters';
import SideCategory from './component/SideCategory/SideCategory';
import ViewController from './component/ViewController/ViewController';
import Product from './component/Product/Product';
import Pagination from './component/Pagination/Pagination';
import { PRODUCT_LIST_API } from '../../config';
import './ProductList.scss';

class ProductList extends Component {
  state = {
    list: [],
    view: 10,
    isClickedView: false,
    viewType: 'imgView',
    filter: 'popular',
    page: 1,
    totalProducts: 0,
  };

  componentDidMount = () => {
    this.getData();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.filter !== prevState.filter) {
      this.getData();
    }
    if (this.state.view !== prevState.view) {
      this.getData();
    }
    if (this.state.page !== prevState.page) {
      this.getData();
    }
    // if (this.props.match.params.category !== prevProps.match.params.category) {
    //   this.getData();
    // }
  };

  getData = () => {
    // 동적 라우팅 시에 사용할 코드
    // const category = this.props.match.params.category;
    // const encoded = btoa(encodeURIComponent(`${category}`));
    const encoded = btoa(encodeURIComponent('1'));
    const offset = (this.state.page - 1) * this.state.view;

    fetch(
      `${PRODUCT_LIST_API}?ordering=${this.state.filter}&offset=${offset}&limit=${this.state.view}&encoded=${encoded}`
    )
      .then(result => result.json())
      .then(data =>
        this.setState({
          list: data.results,
          totalProducts: data.totalProducts,
        })
      );

    // 테스트 위해서 작업코드 남겨둠(임의 토큰 발급)
    // fetch(`http://10.58.0.135:8000/authorization`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     user_id: 1,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => localStorage.setItem('TOKEN', result.token));

    // 작업을 위해서 mock 데이터 남겨둠
    //   fetch('data/ProductData.json')
    //     .then(result => result.json())
    //     .then(list => this.setState({ list, totalProducts: list.length }));
  };

  handleViewCount = () => {
    this.setState({ isClickedView: !this.state.isClickedView });
  };

  getViewCount = id => {
    this.setState({ view: Number(id), isClickedView: false });
  };

  getViewType = type => {
    this.setState({ viewType: type });
  };

  getFilterType = type => {
    this.setState({ filter: type });
  };

  getCurrentPage = num => {
    this.setState({ page: Number(num) });
  };

  handleLike = product => {
    const newList = this.state.list.map(item => {
      if (product.id === item.id) {
        return { ...item, isLiked: !item.isLiked };
      } else {
        return item;
      }
    });
    this.setState({ list: newList });
  };

  render() {
    const { list, view, isClickedView, viewType, filter, totalProducts } =
      this.state;
    return (
      <section className="productList">
        <div className="productListWrapper">
          <header className="header">
            <h1>토이</h1>
            <SideCategory totalProducts={totalProducts} />
          </header>
          <div className="menus">
            <Filters filter={filter} getFilterType={this.getFilterType} />
            <ViewController
              view={view}
              isClickedView={isClickedView}
              viewType={viewType}
              handleViewCount={this.handleViewCount}
              getViewCount={this.getViewCount}
              getViewType={this.getViewType}
            />
          </div>
          <ul className="list">
            {list.length !== 0 ? (
              list.map(product => (
                <Product
                  key={product.id}
                  product={product}
                  viewType={viewType}
                  handleLike={this.handleLike}
                />
              ))
            ) : (
              <strong className="none">검색결과가 없습니다.</strong>
            )}
          </ul>
          <Pagination
            pageCount={Math.ceil(totalProducts / view)}
            getCurrentPage={this.getCurrentPage}
            currentPage={this.state.page}
          />
        </div>
      </section>
    );
  }
}

export default ProductList;
