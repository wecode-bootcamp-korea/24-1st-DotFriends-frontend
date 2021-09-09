import React, { Component } from 'react';
import './DetailCard.scss';

class DetailCard extends Component {
  render() {
    const {
      isClicked,
      handleOption,
      selectOption,
      handleDelete,
      product,
      count,
      isSelected,
    } = this.props;
    const {
      images,
      name,
      price,
      reviews,
      discounted_price,
      discount_percent,
      comment_avg_rate,
    } = product || '';
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
          <div className="priceContainer">
            {!!discount_percent && (
              <span className="price">{price && price.toLocaleString()}원</span>
            )}

            <span className="discountedPrice">
              {discounted_price && discounted_price.toLocaleString()}원
            </span>
          </div>

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
          {isSelected && (
            <div className="selectedProduct">
              <p className="option">단품</p>

              <div className="btnAndPrice">
                <div className="btnBox">
                  <button
                    className="minus"
                    onClick={e => {
                      this.props.updateCount(e, 'substract');
                    }}
                  >
                    -
                  </button>
                  <span className="count">{count}</span>
                  <button
                    className="plus"
                    onClick={e => {
                      this.props.updateCount(e, 'add');
                    }}
                  >
                    +
                  </button>
                </div>
                <span className="totlaPrice">
                  {price && (count * price).toLocaleString()}원
                </span>
              </div>
              <button className="delete" onClick={handleDelete}>
                <i className="fas fa-times" />
              </button>
            </div>
          )}

          <div className="calculator">
            <strong>총 상품 금액</strong>
            <div className="results">
              <span>총 수량 {count}개</span>
              <span>{(price * count).toLocaleString()}원</span>
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
          <strong>{comment_avg_rate}</strong>
          <span>/</span>
          <strong>5</strong>
        </div>
      </div>
    );
  }
}

export default DetailCard;
