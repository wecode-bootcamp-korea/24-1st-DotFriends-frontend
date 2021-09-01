import React, { Component } from 'react';
import './SignUp.scss';

class SignUp extends Component {
  render() {
    return (
      <div className="signUp">
        <div className="signUpWrap">
          {/* header */}
          <div className="header">
            <a href="#" className="logo">
              <h1 className="logoText">Dot Friends</h1>
            </a>
          </div>
          {/* container */}
          <div className="container">
            {/* 아이디,비번,비번재확인 */}
            <div className="rowGroup">
              <div className="joinRow">
                <h3 className="joinTitle">아이디</h3>
                <span className="joinBox">
                  <input className="typingArea" type="text"></input>
                </span>
                <span className="errorNextBox">
                  이메일 양식으로 입력해주세요.
                </span>
              </div>
              <div className="joinRowPw">
                <h3 className="joinTitle">비밀번호</h3>
                <span className="joinBox">
                  <input className="typingArea" type="password" />
                </span>
                <span className="lockIcon"></span>
                <span className="errorNextBox">
                  8자 이상 영문 대 소문자, 숫자, 특수문자를 사용하세요.
                </span>
                <h3 className="joinTitle">비밀번호 재확인</h3>
                <span className="joinBox">
                  <input className="typingArea" type="password" />
                </span>
                <span className="lockoutIcon"></span>
                <span className="errorNextBox">
                  비밀번호가 일치하지 않습니다.
                </span>
              </div>
            </div>
            {/* 이름,주소,폰번호 */}
            <div className="rowGroup userInfo">
              <div className="joinRow infoRow">
                <h3 className="joinTitle">이름</h3>
                <span className="joinBox">
                  <input className="typingArea" type="text" />
                </span>
              </div>
              <div className="joinRow infoRow">
                <h3 className="joinTitle">주소</h3>
                <span className="joinBox">
                  <input className="typingArea" type="text" />
                </span>
              </div>
              <div className="joinRow infoRow">
                <h3 className="joinTitle">휴대전화</h3>
                <span className="joinBox">
                  <input
                    className="typingArea"
                    type="tel"
                    placeholder="전화번호 입력"
                  />
                </span>
              </div>
            </div>
            <div className="btnArea">
              <button className="btnSignUp activeBtnSignUp">가입하기</button>
            </div>
          </div>
          {/* footer */}
          <div className="footer">
            <ul className="footerLinks">
              <li className="footerItem">이용약관</li>
              <li className="footerItem">개인정보처리방침</li>
              <li className="footerItem">책임의 한계와 법적고지</li>
              <li className="footerItem">회원정보 고객센터</li>
            </ul>
            <div className="footerCopy">
              <span className="corp">© DOT Corp</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
