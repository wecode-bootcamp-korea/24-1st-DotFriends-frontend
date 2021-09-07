import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Tags from '../Tags/Tags';
import './Product.scss';

class Product extends Component {
  handleLike = e => {
    fetch(`http://10.58.0.135:8000/userproductlikes`, {
      method: 'POST',
      headers: { authorization: localStorage.getItem('TOKEN') },
      body: JSON.stringify({
        isLiked: this.props.product.isLiked,
        productId: e.currentTarget.name,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'CREATED') {
          this.props.handleLike(this.props.product);
        } else {
          alert('로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?');
          this.props.history.push('/login');
        }
      });
    // this.props.handleLike(this.props.product);
  };

  render() {
    const { name, price, image, id, isLiked } = this.props.product;
    const { viewType } = this.props;
    const randomNumber = (Math.random() * (5 - 1) + 1).toFixed(1);

    return (
      <li className={`productItem ${viewType}`}>
        <div to="/" className="link">
          <Tags />
          <img className="img" src={image} alt="미니언" />
          <div className="detail">
            <h3 className="name">{name}</h3>
            <div className="priceInfo">
              <strong className="price">
                {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </strong>
              {<span>39,000원</span>}
              <span>10%</span>
            </div>
            <button className="smallHeart" name={id} onClick={this.handleLike}>
              <i className={`${isLiked ? 'fas' : 'far'} fa-heart`} />
            </button>
          </div>
          <div className="hoverMenu">
            <button
              className={`bigHeart ${isLiked ? 'active' : ''}`}
              name={id}
              onClick={this.handleLike}
            >
              <i className="far fa-heart" />
            </button>
            <button className="more">
              <i className="fas fa-plus" />
            </button>
          </div>
        </div>
        <div className="evaluation">
          <div className="reviewWrapper">
            <span className="review">리뷰</span>
            <em>12</em>
          </div>
          <div className="gradeWrapper">
            <span className="grade">평점</span>
            <em>{randomNumber}</em>
            <span>/</span>
            <span>5</span>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(Product);
