import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CartItem.scss';

class CartItem extends Component {
  render() {
    return (
      <li className="cartItem">
        <input type="checkbox" />
        <div className="info item">
          <img
            src="https://shop-phinf.pstatic.net/20210105_240/1609812902507CpQUW_JPEG/18608393_55446806.jpg?type=m510"
            alt="상품이미지"
          />
          <div className="description">
            <Link to="/">DOT 프렌즈</Link>
            <span>스마트 스토어</span>
            <span className="tag">
              <span> N </span> Pay
            </span>
            <p className="productName">라인프렌즈 샐리 아크릴 클립 볼펜</p>
            <p className="productPrice">3000원</p>
            <button className="delete">
              <i class="fas fa-times" />
            </button>
          </div>
        </div>
        <div className="option item">
          <p>사이즈 : 단품 </p>
          <div className="productCount">
            <button>
              <i className="far fa-plus-square" />
            </button>
            <span>1</span>
            <button>
              <i className="far fa-minus-square" />
            </button>
          </div>
        </div>
        <div className="price item">
          <em className="productPrice">13,000원</em>
          <span className="deliveryCharge">(배송비 3000원)</span>
          <button className="orderBtn">주문하기</button>
        </div>
      </li>
    );
  }
}

export default CartItem;
