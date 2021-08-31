import React, { Component } from 'react';
import Filters from './component/Filters/Filters';
import SideCategory from './component/SideCategory/SideCategory';
import Product from './Product/Product';
import './ProductList.scss';

class ProductList extends Component {
  state = {
    list: [],
  };

  componentDidMount = () => {
    fetch('/data/ProductData.json')
      .then(result => result.json())
      .then(list => this.setState({ list }));
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
