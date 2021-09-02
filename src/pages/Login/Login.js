import React, { Component } from 'react';
// import { link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      btn: 'btnLogin',
    };
  }
  onchangeId = e => {
    this.setState({
      id: e.target.value,
    });
  };
  onchangePw = e => {
    this.setState({
      pw: e.target.value,
    });
  };
  loginkey = () => {
    if (this.state.id.includes('@') && this.state.pw.length > 7) {
      this.setState({
        btn: 'btnLoginActive',
      });
    } else {
      this.setState({
        btn: 'btnLogin',
      });
    }
  };

  handleLogin = () => {
    fetch('http://10.58.4.133:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(result => result.json())
      .then(result => {
        if (result.MESSAGE === 'SUCCESS') {
          alert(`Welcome ${this.state.id}`);
          console.log(result);
          localStorage.setItem('dot-token', result.token);
          this.props.history.push('/');
        } else {
          alert('Login failed');
          console.log(result);
        }
      });
  };

  render() {
    return (
      <div className="wrapLogin">
        <header className="header">
          <div className="headerInner">
            <a href="/" className="logo">
              <h1 className="logoText">Dot Friends</h1>
            </a>
          </div>
        </header>

        {/* content */}
        <div className="content">
          <div className="loginWrap">
            <div className="idPwWrap">
              <div className="idPwCell">
                <span className="iconSize">
                  <i className="far fa-user faIcon"></i>
                </span>
                <input
                  className="inputIdPw"
                  type="text"
                  placeholder="아이디"
                  value={this.state.id}
                  onChange={this.onchangeId}
                  loginkey={this.loginkey}
                />
              </div>
              <div className="idPwCell">
                <span className="iconSize">
                  <i className="fas fa-unlock-alt faIcon"></i>
                </span>
                <input
                  className="inputIdPw"
                  type="password"
                  placeholder="비밀번호"
                  value={this.state.pw}
                  onChange={this.onchangePw}
                  loginkey={this.loginkey}
                />
              </div>
            </div>
            <div className="btnLoginWrap">
              <a href="/">
                <button className={this.state.btn} onClick={this.handleLogin}>
                  로그인
                </button>
              </a>
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
