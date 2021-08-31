import React, { Component } from 'react';
import Filters from './component/Filters/Filters';
import SideCategory from './component/SideCategory/SideCategory';
import ViewController from './component/ViewController/ViewController';
import Product from './Product/Product';
import './ProductList.scss';

class ProductList extends Component {
  state = {
    view: 20,
    isViewClick: false,
    currentView: 'imgView',
  };

  componentDidMount = () => {
    fetch('/data/ProductData.json')
      .then(result => result.json())
      .then(list => this.setState({ list }));
  };

  handleViewCount = () => {
    this.setState({ isViewClick: !this.state.isViewClick });
  };

  getViewCount = id => {
    this.setState({ view: Number(id), isViewClick: false });
  };

  render() {
    const { list } = this.state;
    console.log(this.state);
    return (
      <section className="productList">
        <header className="header">
          <h1>category</h1>
          <SideCategory />
        </header>
        <div className="menus">
          <Filters />
          <ViewController
            isViewClick={this.state.isViewClick}
            handleViewCount={this.handleViewCount}
            getViewCount={this.getViewCount}
          />
        </div>

        <ul className="list">
          {list ? (
            list
              .slice(0, this.state.view)
              .map(product => <Product key={product.id} product={product} />)
          ) : (
            <strong className="none">검색결과가 없습니다.</strong>
          )}
        </ul>
      </section>
    );
  }
}

export default ProductList;
