import React, { Component } from 'react';
import './DetailCard.scss';

class DetailCard extends Component {
  render() {
    const { isClicked, handleOption, selectOption, product } = this.props;
    const { images, name, price, reviews } = product;
    return (
      <div className="detailCard">
        <div className="productImg">
          <img src={images && images[0]} alt="제품 사진" className="bigImg" />
          <ul className="imgList">
            {images &&
              images.map((image, idx) => (
                <li key={idx}>
                  <img src={image} alt="제품사진" className="smallImg" />
                </li>
              ))}
          </ul>
        </div>
        <div className="productInfo">
          <h1 className="name">{name}</h1>
          <p className="price">{price && price.toLocaleString()}원</p>
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
            <div className="optionBtn" onClick={handleOption}>
              <span>사이즈</span>
            </div>
            <div
              className={`option ${isClicked ? 'show' : ''}`}
              onClick={selectOption}
            >
              <span>단품</span>
            </div>
          </div>
          <div className="selectedProduct">
            <p className="option">단품</p>
            <div className="btnAndPrice">
              <div className="btnBox">
                <button className="minus">-</button>
                <span className="count">1</span>
                <button className="plus">+</button>
              </div>
              <span className="totlaPrice">
                {price && price.toLocaleString()}원
              </span>
            </div>
            <button className="delete">
              <i className="fas fa-times" />
            </button>
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
          <strong>{reviews && reviews.length}</strong>
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
