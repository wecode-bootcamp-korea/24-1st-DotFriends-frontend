import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  render() {
    const { name, price, grade, url } = this.props.product;
    return (
      <li className="productItem">
        <a href="#" className="link">
          <img className="img" src={url} alt="미니언" />
          <div className="description">
            <h3 className="name">{name}</h3>
            <strong className="price">
              {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </strong>
            <button className="smallHeart">
              <i className="far fa-heart" />
            </button>
          </div>
          <div className="hoverMenu">
            <button className="bigHeart">
              <i className="far fa-heart" />
            </button>
            <button className="more">
              <i className="fas fa-plus" />
            </button>
          </div>
        </a>
        <div className="evaluation">
          <span className="review">리뷰</span>
          <em>12</em>
          <span className="grade">평점</span>
          <em>{grade}</em>
          <span>/</span>
          <span>5</span>
        </div>
      </li>
    );
  }
}

export default Product;
