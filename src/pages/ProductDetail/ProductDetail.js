import React, { Component } from 'react';
import DetailCard from './component/DetailCard/DetailCard';
import Review from './component/Review/Review';
import Star from './component/Star/Star';
import { PRODUCT_API } from '../../config';
import './ProductDetail.scss';

class ProductDetail extends Component {
  state = {
    selectedMenu: 'review',
    selectedReviewMenu: 'all',
    isClickedOption: false,
    isSelected: false,
    product: {},
    count: 0,
  };

  componentDidMount = () => {
    // fetch('/data/ProductDetail.json')
    //   .then(res => res.json())
    //   .then(res => this.setState({ product: res.results }));
    // };
    fetch(`${PRODUCT_API}/${this.props.match.params.id}`)
      .then(result => result.json())
      .then(result =>
        this.setState({
          product: result.results,
        })
      );
  };

  handleOption = () => {
    this.setState({ isClickedOption: !this.state.isClickedOption });
  };

  selectOption = () => {
    if (this.state.isSelected) {
      alert('이미 선택한 옵션입니다.');
      this.setState({ isClickedOption: false });
      return;
    }
    this.setState({ isClickedOption: false, isSelected: true, count: 1 });
  };

  updateCount = (e, action) => {
    switch (action) {
      case 'add':
        this.setState({ count: this.state.count + 1 });
        break;
      case 'substract':
        const count = this.state.count - 1;
        this.setState({ count: count > 1 ? count : 1 });
        break;
      default:
        break;
    }
  };

  handleDelete = () => {
    this.setState({ isSelected: false, count: 0 });
  };

  render() {
    const {
      selectedMenu,
      selectedReviewMenu,
      isClickedOption,
      product,
      count,
      isSelected,
    } = this.state;

    const { handleOption, selectOption, updateCount, handleDelete } = this;
    const { comment_avg_rate, comment_count, reviews } = product;
    return (
      <section className="productDetail">
        <div className="detailWrapper">
          <DetailCard
            isClicked={isClickedOption}
            handleOption={handleOption}
            selectOption={selectOption}
            updateCount={updateCount}
            handleDelete={handleDelete}
            product={product}
            count={count}
            isSelected={isSelected}
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
                <Star
                  grade={
                    Number(comment_avg_rate) ? Number(comment_avg_rate) : 0
                  }
                />
                <div>
                  <span>{comment_avg_rate}</span>
                  <span>/</span>
                  <span>5</span>
                </div>
              </div>
              <div className="count">
                <p>전체 리뷰수</p>
                <i className="fas fa-comment" />
                <span>{comment_count}</span>
              </div>
            </div>
            <div className="reviews">
              <h3>리뷰 {comment_count}건</h3>
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
                {reviews &&
                  reviews.map((review, idx) => (
                    <Review
                      key={idx}
                      review={review}
                      image={product.images[0]}
                    />
                  ))}
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
