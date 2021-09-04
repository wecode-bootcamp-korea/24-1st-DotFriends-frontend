import React, { Component } from 'react';
import Filters from './component/Filters/Filters';
import SideCategory from './component/SideCategory/SideCategory';
import ViewController from './component/ViewController/ViewController';
import Product from './component/Product/Product';
import Pagination from './component/Pagination/Pagination';
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
  };

  getData = () => {
    const encoded = btoa(encodeURIComponent('1'));

    fetch(
      `http://10.58.0.135:8000/category?ordering=${this.state.filter}&offset=${
        (this.state.page - 1) * this.state.view
      }&limit=${this.state.view}&encoded=${encoded}`
    )
      .then(result => result.json())
      .then(data =>
        this.setState({ list: data.results, totalProducts: data.totalProducts })
      );
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

  render() {
    const { list, view, isClickedView, viewType, filter, totalProducts } =
      this.state;
    return (
      <section className="productList">
        <header className="header">
          <h1>category</h1>
          <SideCategory />
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
              <Product key={product.id} product={product} viewType={viewType} />
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
      </section>
    );
  }
}

export default ProductList;
