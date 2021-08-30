import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  render() {
    return (
      <li className="productItem">
        <a
          href="https://brand.naver.com/linefriends/products/5814820260"
          className="link"
        >
          <img className="img" src="/images/mini.jpeg" alt="미니언" />
          <div className="description">
            <h3 className="title">미니언 생일 축하 인형</h3>
            <strong className="price">23,000원</strong>
            <button className="smallHeart">
              <i className="far fa-heart" />
            </button>
          </div>
          <div className="hoverMenu">
            <button className="bigHeart">
              <i className="far fa-heart" />
            </button>
            <button className="more">
              <i class="fas fa-plus" />
            </button>
          </div>
        </a>
        <div className="evaluation">
          <span className="review">리뷰</span>
          <em>12</em>
          <span className="grade">평점</span>
          <em>4.7</em>
          <span>/</span>
          <span>5</span>
        </div>
      </li>
    );
  }
}

export default Product;
