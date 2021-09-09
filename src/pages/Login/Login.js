import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IdPwInput from './IdPwInput';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
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
          localStorage.setItem('dot-token', result.token);
          this.props.history.push('/');
        } else {
          alert('Login failed');
        }
      });
  };

  render() {
    const checkIdPw = this.state.id.includes('@') && this.state.pw.length > 7;

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
              {IDPW.map((input, idx) => {
                return (
                  <IdPwInput
                    key={idx}
                    input={input}
                    onchanging={this.handleInputs}
                  />
                );
              })}
            </div>
            <div className="btnLoginWrap">
              <button
                className={checkIdPw ? 'btnLoginActive' : 'btnLogin'}
                onClick={this.handleLogin}
                disabled={!checkIdPw}
              >
                로그인
              </button>
            </div>
          </div>
          <ul className="findWrap">
            <li className="findText">비밀번호 찾기</li>
            <li className="findText">아이디 찾기</li>
            <li className="findText">
              <Link to="/signup" className="goToSignup">
                회원가입
              </Link>
            </li>
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

const IDPW = [
  {
    name: 'id',
    title: '아이디',
    type: 'text',
  },
  {
    name: 'pw',
    title: '비밀번호',
    type: 'password',
  },
];

export default Login;
