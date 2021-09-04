import React, { Component } from 'react';
import './Cart.scss';
import CartItem from './CartItem/CartItem';

class Cart extends Component {
  render() {
    return (
      <section className="cart">
        <div className="cartContainer">
          <header className="header">
            <div className="titleWrapper">
              <div className="titleMenu">
                <h1>일반 장바구니</h1>
                <h1>찜하기 상품</h1>
              </div>
              <div className="side">
                <span>장바구니</span>
                <span>주문/결제</span>
                <span>완료</span>
              </div>
            </div>
            <ul className="notice">
              {NOTICE.map((sentence, idx) => (
                <li key={idx}>{sentence}</li>
              ))}
            </ul>
          </header>
          <div className="cartList">
            <div className="rowTitle">
              <input type="checkbox" className="allCheckBox" />
              <h3 className="info title">상품 정보</h3>
              <h3 className="option title">옵션</h3>
              <h3 className="price title">상품 금액</h3>
            </div>
            <ul className="cartItems">
              <CartItem />
            </ul>
            <div className="btnBox">
              <input type="checkbox" />
              <button>선택상품 삭제</button>
              <button>선택상품 찜</button>
            </div>
            <div className="calculator">
              <div className="priceDetail">
                <dl className="detailItem">
                  <dt>총 상품금액</dt>
                  <dd>19,5000원</dd>
                </dl>
                <dl className="detailItem">
                  <dt>배송비</dt>
                  <dd>3000원</dd>
                </dl>
                <dl className="detailItem">
                  <dt>할인예상금액</dt>
                  <dd>0원</dd>
                </dl>
              </div>
              <div className="totalPrice">
                <span>총 주문금액</span>
                <span>22,500원</span>
              </div>
            </div>
            <div className="cartBtns">
              <button className="shoppingBtn">쇼핑 계속하기</button>
              <button className="orderBtn">주문하기</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;

const NOTICE = [
  '장바구니 상품은 최대 30일간 저장됩니다.',
  '가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.',
  '오늘출발 상품은 판매자 설정 시점에 따라 오늘출발 여부가 변경될 수 있으니 주문 시 꼭 다시 확인해 주시기 바랍니다.',
];
