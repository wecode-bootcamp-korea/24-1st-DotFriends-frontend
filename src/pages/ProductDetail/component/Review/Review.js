import React, { Component } from 'react';
import Star from '../Star/Star';
import './Review.scss';

class Review extends Component {
  render() {
    const { image } = this.props;
    const { user_name, rate, text, created_at } = this.props.review;
    return (
      <li className="Review">
        <div className="reviewInfo">
          <div className="grade">
            <Star grade={rate} />
            <span>{rate}</span>
            <span className="date">{created_at}</span>
          </div>
          <p className="user">{user_name}</p>
          <p className="option">사이즈 : 단품</p>
          <p className="comment">{text}</p>
        </div>
        <img src={image} alt="리뷰사진" />
      </li>
    );
  }
}

export default Review;
