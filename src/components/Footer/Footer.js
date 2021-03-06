import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerTitle">
          <p>
            <i class="fas fa-exclamation-circle" /> 이 사이트는 Dot Friends의
            1차 클론코딩 프로젝트 입니다!
          </p>
          <p>제작자에 대해 궁금하면 하단의 깃허브 사이트를 참고해주세요</p>
        </div>
        <div className="footerContainer">
          <div className="footerEle">
            <strong>frontEnd 개발자</strong>
            <div className="text">
              <p>
                <span className="name">Sally</span>
                <span> | </span>
                <i class="fab fa-github" />
                <span> https://github.com/BobaeKeum</span>
              </p>
              <p>
                <span className="name">Leonard</span>
                <span> | </span>
                <i class="fab fa-github" />
                <span> https://github.com/JUCHEOLJIN</span>
              </p>
              <p>
                <span className="name">Edward</span>
                <span> | </span>
                <i class="fab fa-github" />
                <span> https://github.com/eunjeong-97</span>
              </p>
            </div>
          </div>

          <div className="footerEle">
            <strong>backEnd 개발자</strong>
            <div className="text">
              <p>
                <span className="name">Moon</span>
                <span> | </span>
                <i class="fab fa-github" />
                <span> https://github.com/shinwooju</span>
              </p>
              <p>
                <span className="name">Brown</span>
                <span> | </span>
                <i class="fab fa-github" />
                <span> https://github.com/JackAwesomeKim</span>
              </p>
              <p>
                <span className="name">Boss</span>
                <span> | </span>
                <i class="fab fa-github" />
                <span> https://github.com/sdk1926</span>
              </p>
            </div>
          </div>

          <div className="footerEle">
            <strong>wecode</strong>
            <div className="text">
              <p>
                <span className="name">FrontEnd</span>
                <span> | </span>
                <i class="fab fa-github" />
                <span>
                  {' '}
                  https://github.com/wecode-bootcamp-korea/24-1st-DotFriends-frontend
                </span>
              </p>
              <p>
                <span className="name">BackEnd</span>
                <span> | </span>
                <i class="fab fa-github" />
                <span>
                  {' '}
                  https://github.com/wecode-bootcamp-korea/24-1st-DotFriends-backend
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
