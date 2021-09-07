import React, { Component } from 'react';
import GoodsList from './GoodsList/GoodsList';
import './Main.scss';

const imgArr = [
  "url('https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGhvbWUlMjB3ZWlnaHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
  "url('https://images.unsplash.com/photo-1600694795720-8f56ce39c094?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHN0dWRpbyUyMGJlZHxlbnwwfHwwfHdoaXRlfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
  "url('https://images.unsplash.com/photo-1593224647849-0ef96ecc2bdd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZHxlbnwwfHwwfHdoaXRlfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
  "url('https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWUlMjB3b3Jrb3V0JTIwaW5zdHJ1Y3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
  "url('https://images.unsplash.com/photo-1625834317364-b32c140fd360?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGR1bWJiZWxsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
];

class Main extends Component {
  constructor() {
    super();
    this.state = {
      newList: {},
      saleList: {},
      headerImage: imgArr[0],
      currentSlide: 0,
      TOTAL_SLIDES: 4,
      btn: 'scale 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) forwards',
    };
  }

  findFetch(value) {
    const ipAddress = '10.58.5.129';
    fetch(`http://${ipAddress}:8000/product?option=${value}&limit=12&order=?`)
      .then(response => response.json())
      .then(response => this.setState({ [value + 'List']: response.results }));
  }

  componentDidMount() {
    this.findFetch('new');
    this.findFetch('sale');
  }

  handlePrevSlide = () => {
    let { currentSlide, TOTAL_SLIDES } = this.state;
    if (currentSlide > 0) {
      this.setState({
        currentSlide: currentSlide - 1,
      });
    } else {
      this.setState({
        currentSlide: TOTAL_SLIDES,
      });
    }
  };

  handleNextSlide = () => {
    let { currentSlide, TOTAL_SLIDES } = this.state;
    if (currentSlide < TOTAL_SLIDES) {
      this.setState({
        currentSlide: currentSlide + 1,
      });
      console.log(this.state.btn);
    } else {
      this.setState({
        currentSlide: 0,
      });
    }
  };

  isEmpty = param => {
    return Object.keys(param).length === 0;
  };

  render() {
    const { btn, currentSlide, saleList, newList } = this.state;
    return (
      <div className="main">
        <div
          className="headers"
          style={{ backgroundImage: imgArr[currentSlide], animation: { btn } }}
        >
          <button className="pre" onClick={this.handlePrevSlide}>
            <img src="/images/pre.png" alt="pre" />
          </button>
          <button className="next" onClick={this.handleNextSlide}>
            <img src="/images/next.png" alt="pre" />
          </button>
          <div className="radioContainer">
            {[0, 1, 2, 3, 4].map((radio, radioIdx) => {
              return (
                <input
                  type="radio"
                  name="headerRadio"
                  key={radioIdx}
                  checked={currentSlide === radio}
                  onChange={() => this.setState({ currentSlide: radio })}
                />
              );
            })}
          </div>
        </div>
        {!this.isEmpty(saleList) && (
          <>
            <GoodsList
              title="새로 나왔어요"
              name="newList"
              responseData={newList}
            />
            <GoodsList
              title="싸게 팔아요"
              name="saleList"
              responseData={saleList}
            />
          </>
        )}
        <div className="bottomImage">
          <h1 className="title">DOT FRIENDS</h1>
          <div className="textContainer">
            <p>끝없는 데일리 미팅의 재미</p>
            <p>라인프렌즈는 아니고 클론코딩 프로젝트</p>
            <p>#위코드 #클론코딩 #프로젝트 #전우애</p>
          </div>
          <div className="btnContainer">
            <button className="like">찜하기 181,172</button>
            <button className="bell">
              <img src="/images/종모양.png" alt="종모양" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
