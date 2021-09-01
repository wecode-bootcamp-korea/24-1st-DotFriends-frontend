import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  render() {
    const { name, price, grade, url } = this.props.product;
    const { viewType } = this.props;
    return (
      <li className={`productItem ${viewType}`}>
        <a href="#" className="link">
          <img className="img" src={url} alt="미니언" />
          <div className="detail">
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
          <div className="reviewWrapper">
            <span className="review">리뷰</span>
            <em>12</em>
          </div>
          <div className="gradeWrapper">
            <span className="grade">평점</span>
            <em>{grade}</em>
            <span>/</span>
            <span>5</span>
          </div>
        </div>
      </li>
    );
  }
}

export default Product;
