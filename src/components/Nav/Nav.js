import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <header className="nav">
        <div className="naverMenu">
          <div className="leftMenu">
            <a href="https://www.naver.com/" alt="naver">
              naver
            </a>
            <span>네이버 쇼핑</span>
          </div>
          <div className="rightMenu">
            <button>찜한 스토어</button>
            <button>마이페이지</button>
            <button>장바구니</button>
            <button>user</button>
            <button>아이콘</button>
          </div>
        </div>
        <div>
          <h1>DOT FRIENDS</h1>
        </div>
      </header>
    );
  }
}

export default Nav;
