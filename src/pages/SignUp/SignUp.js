import React, { Component } from 'react';
import SignUpJoin from './SignUpJoin';
import { SIGNUP_API } from '../../config';
import './SignUp.scss';

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
    };
  }

  handleInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSignUp = () => {
    fetch(`${SIGNUP_API}`, {
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
          this.props.history.push('/login');
        } else {
          alert('조건에 맞게 기입해주세요.');
        }
      });
  };

  render() {
    const { id, pw, rePw, name, address, phone } = this.state;
    const idCheck = id !== '' && !id.includes('@');
    const pwCheck = pw !== '' && pw.length < 7;
    const rePwCheck = rePw.length > 0 && pw !== rePw;

    const INFO = [
      {
        title: '아이디',
        name: 'id',
        type: 'text',
        validation: idCheck,
        idAlert: '이메일 양식으로 입력해주세요.',
      },
      {
        title: '비밀번호',
        name: 'pw',
        type: 'password',
        validation: pwCheck,
        idAlert: '8자 이상 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
      },
      {
        title: '비밀번호 재확인',
        name: 'rePw',
        type: 'password',
        validation: rePwCheck,
        idAlert: '비밀번호가 일치하지 않습니다.',
      },
      {
        title: '이름',
        name: 'name',
        type: 'text',
      },
      {
        title: '주소',
        name: 'address',
        type: 'text',
      },
      {
        title: '휴대전화',
        name: 'phone',
        type: 'tel',
      },
    ];

    const check =
      id.includes('@') &&
      pw.length > 7 &&
      rePw === pw &&
      name !== '' &&
      address !== '' &&
      phone !== '';

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
            {/* 아이디,비번,비번재확인, 이름,주소,폰번호 */}
            <div className="rowGroup userInfo">
              {INFO.map((input, idx) => (
                <SignUpJoin
                  key={idx}
                  input={input}
                  handleChange={this.handleInputs}
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
