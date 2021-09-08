import React, { Component } from 'react';
import './SignUp.scss';
import SignUpJoin from './SignUpJoin';
import SingUpIdPw from './SingUpIdPw';

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
    console.log(213);
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
        check_password: this.state.rePw,
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

    const idCheck = this.state.id !== '' && !this.state.id.includes('@');
    const pwCheck = this.state.pw !== '' && this.state.pw.length < 7;
    const rePwCheck = pwCheck && this.state.pw !== this.state.rePw;

    const IDPW = [
      {
        name: '아이디',
        type: 'text',
        idAlert: '이메일 양식으로 입력해주세요.',
        idPwCheck: idCheck,
        onchange: this.onchangeId,
      },
      {
        name: '비밀번호',
        type: 'password',
        idAlert: '8자 이상 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
        idPwCheck: pwCheck,
        onchange: this.onchangePw,
      },
      {
        name: '비밀번호 재확인',
        type: 'password',
        idAlert: '비밀번호가 일치하지 않습니다.',
        idPwCheck: rePwCheck,
        onchange: this.onchangeRePw,
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
    // console.log(this.state);

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
              {IDPW.map((row, idx) => {
                console.log(row.idPwCheck);
                return (
                  <SingUpIdPw
                    key={idx}
                    name={row.name}
                    type={row.type}
                    // value={this.state.id}
                    onchange={row.onchange}
                    loginkey={this.loginkey}
                    idPwCheck={row.idPwCheck}
                    idAlert={row.idAlert}
                  />
                );
              })}
            </div>

            {/* 이름,주소,폰번호 */}
            <div className="rowGroup userInfo">
              {INFO.map((input, idx) => (
                <SignUpJoin
                  key={idx}
                  name={input.name}
                  type={input.type}
                  loginkey={this.loginkey}
                  handleChange={input.handleChange}
                />
              ))}
            </div>
            <div className="btnArea">
              <button
                className={check ? 'activeBtnSignUp' : 'btnSignUp'}
                onClick={this.handleSignUp}
                disabled={!check}
              >
                가입하기
              </button>
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
