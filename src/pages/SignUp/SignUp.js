import React, { Component } from 'react';
import './SignUp.scss';
import SignUpJoin from './SignUpJoin';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      rePw: '',
      name: '',
      address: '',
      phone: '',
      btn: false,
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
  onchangeRePw = e => {
    this.setState({
      rePw: e.target.value,
    });
  };
  onchangeName = name => {
    this.setState({
      name,
    });
  };
  onchangeAddress = address => {
    this.setState({
      address,
    });
  };
  onchangePhone = phone => {
    this.setState({
      phone,
    });
  };

  loginkey = () => {
    if (
      this.state.id.includes('@') &&
      this.state.pw.length > 7 &&
      this.state.rePw === this.state.pw &&
      this.state.name !== '' &&
      this.state.address !== '' &&
      this.state.phone !== ''
    ) {
      this.setState({
        btn: true,
      });
    } else {
      this.setState({
        btn: false,
      });
    }
  };

  handleSignUp = () => {
    fetch('http://10.58.7.62:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
        check_password: this.state.rePw, //패스워드체크 물어보기
        name: this.state.name,
        address: this.state.address,
        phone_number: this.state.phone,
      }),
    })
      .then(result => result.json())
      .then(result => {
        if (result.MESSAGE === 'CREATE') {
          alert(`${this.state.id}님, 가입을 환영합니다.`);
          console.log(result);
          // localStorage.setItem('dot-token', result.token);
          // this.props.history.push('/');
        } else {
          alert('조건에 맞게 기입해주세요.');
          console.log(result);
        }
      });
  };

  render() {
    const INFO = [
      {
        name: '이름',
        type: 'text',
        handleChange: this.onchangeName,
      },
      {
        name: '주소',
        type: 'text',
        handleChange: this.onchangeAddress,
      },
      {
        name: '휴대전화',
        type: 'tel',
        handleChange: this.onchangePhone,
      },
    ];

    const check =
      this.state.id.includes('@') &&
      this.state.pw.length > 7 &&
      this.state.rePw === this.state.pw &&
      this.state.name !== '' &&
      this.state.address !== '' &&
      this.state.phone !== ''
        ? true
        : false;
    console.log(check);
    // this.loginkey();
    console.log(this.state);
    return (
      <div className="signUp">
        <div className="signUpWrap">
          {/* header */}
          <div className="header">
            <a href="/" className="logo">
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
                  <input
                    className="typingArea"
                    type="text"
                    value={this.state.id}
                    onChange={this.onchangeId}
                    loginkey={this.loginkey}
                  ></input>
                </span>
                <span className="errorNextBox">
                  이메일 양식으로 입력해주세요.
                </span>
              </div>
              <div className="joinRowPw">
                <h3 className="joinTitle">비밀번호</h3>
                <span className="joinBox">
                  <input
                    className="typingArea"
                    type="password"
                    onChange={this.onchangePw}
                    loginkey={this.loginkey}
                  />
                </span>
                <span className="lockIcon"></span>
                <span className="errorNextBox">
                  8자 이상 영문 대 소문자, 숫자, 특수문자를 사용하세요.
                </span>
                <h3 className="joinTitle">비밀번호 재확인</h3>
                <span className="joinBox">
                  <input
                    className="typingArea"
                    type="password"
                    onChange={this.onchangeRePw}
                    loginkey={this.loginkey}
                  />
                </span>
                <span className="lockoutIcon"></span>
                <span className="errorNextBox">
                  비밀번호가 일치하지 않습니다.
                </span>
              </div>
            </div>
            {/* 이름,주소,폰번호 */}
            <div className="rowGroup userInfo">
              {/* <SignUpJoin
                joinName={joinName}
                text={text}
                value={this.state.name}
                onChange={this.onchangeName}
                loginkey={this.loginkey}
              /> */}
              {/* <div className="joinRow infoRow">
                <h3 className="joinTitle">이름</h3>
                <span className="joinBox">
                  <input
                    className="typingArea"
                    type="text"
                    value={this.state.name}
                    onChange={this.onchangeName}
                    loginkey={this.loginkey}
                  />
                </span>
              </div> */}
              {INFO.map((input, idx) => (
                <SignUpJoin
                  key={idx}
                  name={input.name}
                  type={input.type}
                  loginkey={this.loginkey}
                  handleChange={input.handleChange}
                />
              ))}
              {/* <div className="joinRow infoRow">
                <h3 className="joinTitle">주소</h3>
                <span className="joinBox">
                  <input
                    className="typingArea"
                    type="text"
                    value={this.state.address}
                    onChange={this.onchangeAddress}
                    loginkey={this.loginkey}
                  />
                </span>
              </div>
              <div className="joinRow infoRow">
                <h3 className="joinTitle">휴대전화</h3>
                <span className="joinBox">
                  <input
                    className="typingArea"
                    type="tel"
                    placeholder="전화번호 입력"
                    value={this.state.phone}
                    onChange={this.onchangePhone}
                    loginkey={this.loginkey}
                  />
                </span>
              </div> */}
            </div>
            <div className="btnArea">
              {/* <a href="/"> */}
              <button
                className={check ? 'activeBtnSignUp' : 'btnSignUp'}
                onClick={this.handleSignUp}
                disabled={!check}
              >
                가입하기
              </button>
              {/* </a> */}
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
