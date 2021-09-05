import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tags from '../Tags/Tags';
import './Product.scss';

class Product extends Component {
  render() {
    const { name, price, image } = this.props.product;
    const { viewType } = this.props;
    const randomNumber = (Math.random() * (5 - 1) + 1).toFixed(1);

    return (
      <li className={`productItem ${viewType}`}>
        <Link to="/" className="link">
          <Tags />
          <img className="img" src={image} alt="미니언" />
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
        </Link>
        <div className="evaluation">
          <div className="reviewWrapper">
            <span className="review">리뷰</span>
            <em>12</em>
          </div>
          <div className="gradeWrapper">
            <span className="grade">평점</span>
            <em>{randomNumber}</em>
            <span>/</span>
            <span>5</span>
          </div>
        </div>
      </li>
    );
  }
}

export default Product;
