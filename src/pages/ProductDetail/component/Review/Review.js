import React, { Component } from 'react';
import Star from '../Star/Star';
import './Review.scss';

class Review extends Component {
  render() {
    return (
      <li className="Review">
        <div className="reviewInfo">
          <div className="grade">
            <Star grade={5} />
            <span>5</span>
          </div>
          <p className="user">유저 아이디</p>
          <p className="option">사이즈 : 단품</p>
          <p className="comment">너무 귀엽고 사랑스러워요!</p>
        </div>
        <img
          src="https://shop-phinf.pstatic.net/20210802_296/1627871458931kq8aG_JPEG/19943140_64080822.jpg?type=m510"
          alt="리뷰사진"
        />
      </li>
    );
  }
}

export default Review;
