import React, { Component } from 'react';
import './ProductDetail.scss';

class ProductDetail extends Component {
  render() {
    return (
      <div className="productWrap">
        {/* <Nav/> */}
        <div className="contents">
          <div className="aboutProduct">
            <div className="imgInfo">
              <div className="repImg">
                <image className="bigImg" src="" alt="대표이미지"></image>
              </div>
              <ul className="smallImages">
                <li className="smallImage"></li>
                <li className="smallImage"></li>
              </ul>
            </div>
            <div className="details"></div>
          </div>
          <div className="reviewWarp">
            <div className="reviewTitle"></div>
            <div className="aboutRating"></div>
            <div className="reviewList"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
