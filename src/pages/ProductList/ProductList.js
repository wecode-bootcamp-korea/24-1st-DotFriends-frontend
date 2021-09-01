import React, { Component } from 'react';
import Filters from './component/Filters/Filters';
import SideCategory from './component/SideCategory/SideCategory';
import ViewController from './component/ViewController/ViewController';
import Product from './Product/Product';
import './ProductList.scss';

class ProductList extends Component {
  state = {
    list: [],
    view: 20,
    isClickedView: false,
    viewType: 'imgView',
  };

  componentDidMount = () => {
    fetch('/data/ProductData.json')
      .then(result => result.json())
      .then(list => this.setState({ list }));
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

  render() {
    const { list, view, isClickedView, viewType } = this.state;
    console.log(viewType);
    return (
      <section className="productList">
        <header className="header">
          <h1>category</h1>
          <SideCategory />
        </header>
        <div className="menus">
          <Filters />
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
          {list ? (
            list
              .slice(0, view)
              .map(product => (
                <Product
                  key={product.id}
                  product={product}
                  viewType={viewType}
                />
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
