import React, { Component } from 'react';
import './SideCategory.scss';

class SideCategory extends Component {
  render() {
    return (
      <ul className="sideCategory">
        <li>
          <a href="#" className="home">
            홈
          </a>
        </li>
        <li>
          <a href="#" className="category">
            <span>토이</span>
            <span>(총 {this.props.totalProducts}개)</span>
          </a>
          <button className="more">
            <i className="fas fa-caret-down" />
          </button>
        </li>
        <li>
          <a href="#">전체</a>
        </li>
      </ul>
    );
  }
}

export default SideCategory;
