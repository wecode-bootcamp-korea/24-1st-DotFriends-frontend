import React, { Component } from 'react';
import './DetailCard.scss';

class DetailCard extends Component {
  render() {
    return (
      <div className="detailCard">
        <div className="productImg">
          <img
            src="https://shop-phinf.pstatic.net/20210802_296/1627871458931kq8aG_JPEG/19943140_64080822.jpg?type=m510"
            alt="제품 사진"
            className="bigImg"
          />
          <ul className="imgList">
            <li>
              <img
                src="https://shop-phinf.pstatic.net/20210802_296/1627871458931kq8aG_JPEG/19943140_64080822.jpg?type=m510"
                alt="제품사진"
                className="smallImg"
              />
            </li>
            <li>
              <img
                src="https://shop-phinf.pstatic.net/20210802_296/1627871458931kq8aG_JPEG/19943140_64080822.jpg?type=m510"
                alt="제품사진"
                className="smallImg"
              />
            </li>
            <li>
              <img
                src="https://shop-phinf.pstatic.net/20210802_296/1627871458931kq8aG_JPEG/19943140_64080822.jpg?type=m510"
                alt="제품사진"
                className="smallImg"
              />
            </li>
            <li>
              <img
                src="https://shop-phinf.pstatic.net/20210802_296/1627871458931kq8aG_JPEG/19943140_64080822.jpg?type=m510"
                alt="제품사진"
                className="smallImg"
              />
            </li>
          </ul>
        </div>
        <div className="productInfo">
          <h1 className="name">라인프렌즈 코니 생일 축하 인형</h1>
          <p className="price">{23000}원</p>
          <div className="pointBox">
            <div className="pointIntro">
              <strong>라인 프렌즈 고객을 위한 혜택</strong>
            </div>
            <div className="maxPoint">
              <strong>최대 적립 포인트</strong>
              <span>380원</span>
            </div>
            <div className="defaultPoint">
              <span>+ 기본적립</span>
              <span>230원</span>
            </div>
            <div className="tipBox">
              <div className="tipPoint">
                <strong>
                  <span className="tip">TIP.</span> 포인트 더 받는 방법
                </strong>
                <span>+최대 2,530원</span>
              </div>
              <ul className="tipList">
                <li>
                  <span>최대 5% 적립, 무료 시작</span>
                  <span>920원</span>
                </li>
                <li>
                  <span>추가 5% 적립, 네이버 현대카드</span>
                  <span>1,150원</span>
                </li>
                <li>
                  <span>충전포인트로 결제시</span>
                  <span>460원</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="options">
            <div className="optionBtn">
              <span>사이즈</span>
            </div>
            <div className="option hidden">
              <span>단품</span>
            </div>
          </div>
          <div className="calculator">
            <strong>총 상품 금액</strong>
            <div className="results">
              <span>총 수량 0개</span>
              <span>0원</span>
            </div>
          </div>
          <div className="buttons">
            <button className="purchaseBtn">구매하기</button>
            <button className="cartBtn">장바구니</button>
            <button className="followBtn">찜하기</button>
          </div>
        </div>
        <div className="evaluation">
          <span>리뷰슈</span>
          <strong>11</strong>
          <span>사용자 평점</span>
          <strong>5.0</strong>
          <span>/</span>
          <strong>5</strong>
        </div>
      </div>
    );
  }
}

export default DetailCard;
