import React, { Component } from 'react';
import Filters from './component/Filters/Filters';
import SideCategory from './component/SideCategory/SideCategory';
import Product from './Product/Product';
import './ProductList.scss';

class ProductList extends Component {
  state = {
    list: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  };
  render() {
    return (
      <section className="productList">
        <header className="header">
          <h1>category</h1>
          <SideCategory />
        </header>
        <Filters />
        <ul className="list">
          {this.state.list.map(product => (
            <Product key={product} product={product} />
          ))}
        </ul>
      </section>
    );
  }
}

export default ProductList;
