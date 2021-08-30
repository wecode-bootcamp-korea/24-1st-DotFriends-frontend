import React, { Component } from 'react';
import Product from './Product/Product';
import './ProductList.scss';

class ProductList extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };
  render() {
    return (
      <ul className="productList">
        {this.state.list.map(product => (
          <Product product={product} />
        ))}
      </ul>
    );
  }
}

export default ProductList;
