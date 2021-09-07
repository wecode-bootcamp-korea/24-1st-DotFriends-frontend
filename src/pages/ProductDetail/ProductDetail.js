import React, { Component } from 'react';
import DetailCard from './component/DetailCard/DetailCard';
import './ProductDetail.scss';
class ProductDetail extends Component {
  render() {
    return (
      <section className="productDetail">
        <div className="detailWrapper">
          <DetailCard />
          <div className="menus">
            <button className="menu active">상세정보</button>
            <button className="menu">리뷰</button>
            <button className="menu">Q&A</button>
          </div>
          <div className="productReviews">
            <div className="reviewTitle">
              <h2>상품리뷰</h2>
              <p>상품을 구매하신 분들이 작성하신 리뷰입니다. </p>
            </div>
            <div className="summary">
              <div className="star">
                <p>사용자 총 평점</p>
                <i className="fas fa-star" />
                <div>
                  <span>5</span>
                  <span>/</span>
                  <span>5</span>
                </div>
              </div>
              <div className="count">
                <p>전체 리뷰수</p>
                <i className="fas fa-comment" />
                <span>11</span>
              </div>
            </div>
            <div className="reviews">
              <h3>리뷰 11건</h3>
              <div className="reviewBtns">
                <button className="reviewBtn active">전체보기</button>
                <button className="reviewBtn">포토/동영상</button>
                <button className="reviewBtn">스토어PICK</button>
                <button className="reviewBtn">한달사용리뷰</button>
              </div>
              <ul className="reviewList">
                <li>
                  <div className="reviewInfo">
                    <p className="grade">
                      평점 <i className="fas fa-star" />
                      <span>5</span>
                    </p>
                    <p className="user">유저 아이디</p>
                    <p className="option">사이즈 : 단품</p>
                    <p classname="comment">너무 귀엽고 사랑스러워요!</p>
                  </div>
                  <img
                    src="https://shop-phinf.pstatic.net/20210802_296/1627871458931kq8aG_JPEG/19943140_64080822.jpg?type=m510"
                    alt="리뷰사진"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ProductDetail;
