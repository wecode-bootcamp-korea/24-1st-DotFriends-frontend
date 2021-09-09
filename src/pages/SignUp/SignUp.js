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

  handleIdPWInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
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
        } else {
          alert('조건에 맞게 기입해주세요.');
        }
      });
  };

  render() {
    const idCheck = this.state.id !== '' && !this.state.id.includes('@');
    const pwCheck = this.state.pw !== '' && this.state.pw.length < 7;
    const rePwCheck = this.state.pw !== this.state.rePw;

    const IDPW = [
      {
        name: 'id',
        title: '아이디',
        type: 'text',
        idAlert: '이메일 양식으로 입력해주세요.',
        idPwCheck: idCheck,
        onchange: this.handleIdPWInputs,
      },
      {
        name: 'pw',
        title: '비밀번호',
        type: 'password',
        idAlert: '8자 이상 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
        idPwCheck: pwCheck,
        onchange: this.handleIdPWInputs,
      },
      {
        name: 'rePw',
        title: '비밀번호 재확인',
        type: 'password',
        idAlert: '비밀번호가 일치하지 않습니다.',
        idPwCheck: rePwCheck,
        onchange: this.handleIdPWInputs,
      },
    ];

    const INFO = [
      {
        name: '이름',
        type: 'text',
        pattern: '',
        handleChange: this.onchangeName,
      },
      {
        name: '주소',
        type: 'text',
        pattern: '',
        handleChange: this.onchangeAddress,
      },
      {
        name: '휴대전화',
        type: 'tel',
        pattern: '[0-9]{3}-[0-9]{4}-[0-9]{4}',
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
                return (
                  <SingUpIdPw
                    key={idx}
                    name={row.name}
                    title={row.title}
                    type={row.type}
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
                  pattern={input.pattern}
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
