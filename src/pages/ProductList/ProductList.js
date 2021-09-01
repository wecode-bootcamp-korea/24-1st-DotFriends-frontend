import React, { Component } from 'react';
import Filters from './component/Filters/Filters';
import SideCategory from './component/SideCategory/SideCategory';
import ViewController from './component/ViewController/ViewController';
import Product from './Product/Product';
import './ProductList.scss';

class ProductList extends Component {
  state = {
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

  getViewMode = type => {
    this.setState({ viewType: type });
  };

  render() {
    const { list } = this.state;
    return (
      <section className="productList">
        <header className="header">
          <h1>category</h1>
          <SideCategory />
        </header>
        <div className="menus">
          <Filters />
          <ViewController
            view={this.state.view}
            isClickedView={this.state.isClickedView}
            currentView={this.state.currentView}
            handleViewCount={this.handleViewCount}
            getViewCount={this.getViewCount}
            getViewMode={this.getViewMode}
          />
        </div>

        <ul className="list">
          {list ? (
            list
              .slice(0, this.state.view)
              .map(product => (
                <Product
                  key={product.id}
                  product={product}
                  viewType={this.state.viewType}
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
