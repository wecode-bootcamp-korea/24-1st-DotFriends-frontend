import React, { Component } from 'react';
// import { link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="wrapLogin">
        <header className="header">
          <div className="headerInner">
            <a href="#" className="logo">
              <h1 className="logoText">Dot Friends</h1>
            </a>
          </div>
        </header>

        {/* content */}
        <div className="content">
          <div className="loginWrap">
            <div className="idPwWrap">
              <div className="idCell">
                <span className="iconSize">
                  <i className="far fa-user"></i>
                </span>
                <input type="text" placeholder="아이디" className="inputId" />
              </div>
              <div className="pwCell">
                <span className="iconSize">
                  <i className="fas fa-unlock-alt"></i>
                </span>
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="inputPw"
                />
              </div>
            </div>
            <div className="btnLoginWrap">
              <button className="btnLogin btnLoginActive">로그인</button>
            </div>
          </div>
          <ul className="findWrap">
            <li className="findText">비밀번호 찾기</li>
            <li className="findText">아이디 찾기</li>
            <li className="findText">회원가입</li>
          </ul>

          {/* footer */}
          <div className="footer">
            <div className="footerInner">
              <ul className="footerLinks">
                <li className="footerItem">이용약관</li>
                <li className="footerItem">개인정보처리방침</li>
                <li className="footerItem">책임의 한계와 법적고지</li>
                <li className="footerItem">회원정보 고객센터</li>
              </ul>
              <div className="footerCopy">
                <span className="siteName">DOT FRIENDS</span>
                <span className="text">Copyright</span>
                <span className="corp">© DOT Corp</span>
                <span className="text">All Rights Reserved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
