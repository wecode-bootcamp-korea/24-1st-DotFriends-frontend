import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Category from './Category';
import MENULIST from './MENULIST';
import './Nav.scss';

class Nav extends Component {
  state = {
    searchValue: '',
    isLiked: false,
  };

  handleLike = () => {
    this.setState({ isLiked: !this.state.isLiked });
  };

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  goToSearchResult = e => {
    e.preventDefault();
    this.props.history.push('/product-list');
  };

  goToProductList = e => {
    this.props.history.push(`/product-list/${e}`);
  };

  render() {
    const { isLiked } = this.state;
    const isLogined = localStorage.getItem('TOKEN');
    const unfollowedStore = (
      <div>
        <i className="fas fa-plus" />
        {'찜하기 181,685'}
      </div>
    );
    const followedStore = <div>찜한 스토어</div>;
    return (
      <header className="nav">
        <div className="topWrapper">
          <div className="naverMenu">
            <div className="leftMenu">
              <a
                href="https://www.naver.com/"
                alt="naver"
                className="naverLogo"
              >
                naver
              </a>
              <span className="shopping">
                <i className="fas fa-shopping-bag" />
                네이버 쇼핑
              </span>
            </div>
            <div className="rightMenu">
              {isLogined && (
                <Link to="/cart" className="cart">
                  장바구니
                </Link>
              )}
              <Link to={isLogined ? '/' : '/login'} className="login">
                {isLogined ? '로그아웃' : '로그인'}
              </Link>
              <button className="service">
                <i className="fas fa-th" />
              </button>
            </div>
          </div>
        </div>
        <div className="headerMenu">
          <button
            className={`likedBtn ${isLiked ? 'active' : ''}`}
            onClick={this.handleLike}
          >
            {isLiked ? followedStore : unfollowedStore}
          </button>
          {isLiked && (
            <button className="followBtn">
              <i className="fas fa-plus" />
              소식 받기
            </button>
          )}
          <h1 className="mainLogo">
            <Link to="/">DOT FRIENDS</Link>
          </h1>
          <form className="searchForm" onSubmit={this.goToSearchResult}>
            <input
              type="text"
              className="search"
              placeholder="검색어를 입력해보세요"
              onChange={this.handleChange}
            />
            <button className="searchBtn">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>
        <nav className="categoriesContainer">
          <div className="categoriesWrapper">
            <ul className="categories">
              {MENULIST.map(category => (
                <Category
                  key={category.id}
                  category={category}
                  goToProductList={this.goToProductList}
                />
              ))}
            </ul>
            <button className="more">
              더보기
              <i className="fas fa-chevron-down" />
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Nav);
