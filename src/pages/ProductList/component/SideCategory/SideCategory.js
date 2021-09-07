import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideCategory.scss';

class SideCategory extends Component {
  render() {
    const { totalProducts, category } = this.props;
    return (
      <ul className="sideCategory">
        <li>
          <Link to="/" className="home">
            홈
          </Link>
        </li>
        <li>
          <Link to="/product-list" className="category">
            <span>{category}</span>
            <span>(총 {totalProducts}개)</span>
          </Link>
          <button className="more">
            <i className="fas fa-caret-down" />
          </button>
        </li>
        <li>
          <Link to="product-list">전체</Link>
        </li>
      </ul>
    );
  }
}

export default SideCategory;
