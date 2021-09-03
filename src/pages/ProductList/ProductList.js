import React, { Component } from 'react';
import Filters from './component/Filters/Filters';
import SideCategory from './component/SideCategory/SideCategory';
import ViewController from './component/ViewController/ViewController';
import Product from './component/Product/Product';
import './ProductList.scss';

class ProductList extends Component {
  state = {
    list: [],
    view: 10,
    isClickedView: false,
    viewType: 'imgView',
    filter: 'popular',
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
  };

  getData = () => {
    const encoded = btoa(encodeURIComponent('전자제품'));

    fetch(
      `http://10.58.0.135:8000/category?ordering=${this.state.filter}&page=1&limit=${this.state.view}&encoded=${encoded}`
    )
      .then(result => result.json())
      .then(list => this.setState({ list: list.results }));
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

  render() {
    const { list, view, isClickedView, viewType, filter } = this.state;
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
      </section>
    );
  }
}

export default ProductList;
