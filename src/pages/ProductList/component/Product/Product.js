import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Tags from '../Tags/Tags';
import { BASE_URL } from '../../../../config';
import './Product.scss';

class Product extends Component {
  handleLike = e => {
    fetch(`${BASE_URL}/userproductlikes`, {
      method: 'POST',
      headers: { authorization: localStorage.getItem('TOKEN') },
      body: JSON.stringify({
        isLiked: this.props.product.isLiked,
        productId: e.currentTarget.name,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'CREATED') {
          this.props.handleLike(this.props.product);
        } else {
          alert('로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?');
          this.props.history.push('/login');
        }
      });
  };

  render() {
    const {
      name,
      price,
      image,
      id,
      isLiked,
      discount_percent,
      discounted_price,
      avg_rate,
      review_count,
      is_New,
    } = this.props.product;
    const { viewType } = this.props;

    return (
      <li className={`productItem ${viewType}`}>
        <div to="/" className="link">
          <Tags isNew={is_New} />
          <img className="img" src={image !== [] && image[0]} alt="미니언" />
          <div className="detail">
            <h3 className="name">{name}</h3>
            <div className="priceInfo">
              <strong className="disCountedPrice">
                {discounted_price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </strong>
              {discount_percent > 0 && (
                <span className="price">{price.toLocaleString()}원</span>
              )}
              {discount_percent > 0 && (
                <span className="discountedPercent">{discount_percent}%</span>
              )}
            </div>
            <button className="smallHeart" name={id} onClick={this.handleLike}>
              <i className={`${isLiked ? 'fas' : 'far'} fa-heart`} />
            </button>
          </div>
          <div className="hoverMenu">
            <button
              className={`bigHeart ${isLiked ? 'active' : ''}`}
              name={id}
              onClick={this.handleLike}
            >
              <i className="far fa-heart" />
            </button>
            <button className="more">
              <i className="fas fa-plus" />
            </button>
          </div>
        </div>
        <div className="evaluation">
          <div className="reviewWrapper">
            <span className="review">리뷰</span>
            <em>{review_count}</em>
          </div>
          <div className="gradeWrapper">
            <span className="grade">평점</span>
            <em>{avg_rate}</em>
            <span>/</span>
            <span>5</span>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(Product);
