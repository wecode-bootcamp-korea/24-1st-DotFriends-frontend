import React, { Component } from 'react';
import DetailCard from './component/DetailCard/DetailCard';
import Review from './component/Review/Review';
import Star from './component/Star/Star';
import './ProductDetail.scss';
class ProductDetail extends Component {
  state = {
    selectedMenu: 'review',
    selectedReviewMenu: 'all',
    isClickedOption: false,
    isSelected: false,
  };

  handleOption = () => {
    this.setState({ isClickedOption: !this.state.isClickedOption });
  };

  selectOption = () => {
    this.setState({ isClickedOption: false, isSelected: true });
  };

  render() {
    const { selectedMenu, selectedReviewMenu, isClickedOption } = this.state;
    return (
      <section className="productDetail">
        <div className="detailWrapper">
          <DetailCard
            isClicked={isClickedOption}
            handleOption={this.handleOption}
            selectOption={this.selectOption}
          />
          <div className="menus">
            {DETAIL_MENU.map((menu, idx) => (
              <button
                className={`menu ${
                  selectedMenu === menu.class ? 'active' : ''
                }`}
                key={idx}
              >
                {menu.name}
              </button>
            ))}
          </div>
          <div className="productReviews">
            <div className="reviewTitle">
              <h2>상품리뷰</h2>
              <p>상품을 구매하신 분들이 작성하신 리뷰입니다. </p>
            </div>
            <div className="summary">
              <div className="star">
                <p>사용자 총 평점</p>
                <Star grade={4.1} />
                <div>
                  <span>4.1</span>
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
                {REVIEW_MENU.map((menu, idx) => (
                  <button
                    className={`reviewBtn ${
                      selectedReviewMenu === menu.class ? 'active' : ''
                    }`}
                    key={idx}
                  >
                    {menu.name}
                  </button>
                ))}
              </div>
              <ul className="reviewList">
                <Review />
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ProductDetail;

const DETAIL_MENU = [
  {
    name: '상세정보',
    class: 'detail',
  },
  { name: '리뷰', class: 'review' },
  { name: 'Q&A', class: 'Q&A' },
];

const REVIEW_MENU = [
  { name: '전체보기', class: 'all' },
  { name: '포토/동영상', class: 'media' },
  { name: '스토어PICK', class: 'pick' },
  { name: '한달사용리뷰', class: 'month' },
];
