import React, { Component } from 'react';
import GoodsList from './GoodsList/GoodsList';
import './Main.scss';

const imgArr = [
  "url('https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29yayUyMGZyb20lMjBob21lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
  "url('https://images.unsplash.com/photo-1600694795720-8f56ce39c094?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHN0dWRpbyUyMGJlZHxlbnwwfHwwfHdoaXRlfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
  "url('https://images.unsplash.com/photo-1593224647849-0ef96ecc2bdd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZHxlbnwwfHwwfHdoaXRlfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
  "url('https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
  "url('https://images.unsplash.com/photo-1625834317364-b32c140fd360?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGR1bWJiZWxsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
  "url('https://images.unsplash.com/photo-1581199451876-013a48e36f1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG5pbnRlbmRvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
];

const textAreaObj = {
  0: {
    textTitle: '출근하지',
    textComment: '않아도 돼',
    textSmallComment: '노트북으로 재택근무해요',
  },
  1: {
    textTitle: '집에서도',
    textComment: '심심하지 않아',
    textSmallComment: '나만의 DLY작품을 만들어요',
  },
  2: {
    textTitle: '혼자하는',
    textComment: '힐링타임',
    textSmallComment: '침대에서 뒹굴어요',
  },
  3: {
    textTitle: '심심할 땐',
    textComment: '요리해요',
    textSmallComment: '사먹지 않고 만들어 먹어요',
  },
  4: {
    textTitle: '혼자하는',
    textComment: '홈 트레이닝',
    textSmallComment: '나가지 않아도 운동할 수 있어요',
  },
  5: {
    textTitle: '여가생활은',
    textComment: '게임 속에서',
    textSmallComment: '집에서도 시간이 너무 잘 가요',
  },
};

class Main extends Component {
  constructor() {
    super();
    this.state = {
      newList: {},
      saleList: {},
      currentSlide: 0,
      TOTAL_SLIDES: 5,
    };
  }

  findFetch(value) {
    const ipAddress = '10.58.0.135';
    fetch(`http://${ipAddress}:8000/products?option=${value}&limit=12&order=?`)
      .then(response => response.json())
      .then(response => this.setState({ [value + 'List']: response.results }));
  }

  componentDidMount() {
    this.findFetch('new');
    this.findFetch('sale');
    setInterval(this.handleNextSlide, 3000);
  }

  handlePrevSlide = () => {
    let { currentSlide, TOTAL_SLIDES } = this.state;
    if (currentSlide > 0) {
      this.setState({
        currentSlide: currentSlide - 1,
      });
    } else this.setState({ currentSlide: TOTAL_SLIDES });
  };

  handleNextSlide = () => {
    let { currentSlide, TOTAL_SLIDES } = this.state;
    if (currentSlide < TOTAL_SLIDES) {
      this.setState({ currentSlide: currentSlide + 1 });
    } else this.setState({ currentSlide: 0 });
  };

  isEmpty = param => {
    return Object.keys(param).length === 0;
  };

  makeClass = current => {
    const obj = {
      0: 'odd',
      1: 'even',
      2: 'odd',
      3: 'even',
      4: 'odd',
      5: 'even',
    };
    return obj[current];
  };

  render() {
    console.log(this.state.isOn);
    const { currentSlide, saleList, newList } = this.state;
    return (
      <div className="main">
        <div className="textArea">
          <h1>{textAreaObj[currentSlide].textTitle}</h1>
          <h1>{textAreaObj[currentSlide].textComment}</h1>
          <p>{textAreaObj[currentSlide].textSmallComment}</p>
        </div>
        <div
          className={`headers ${this.makeClass(currentSlide)}`}
          style={{ backgroundImage: imgArr[currentSlide] }}
        >
          <button className="pre" onClick={this.handlePrevSlide}>
            <img src="/images/pre.png" alt="pre" />
          </button>
          <button className="next" onClick={this.handleNextSlide}>
            <img src="/images/next.png" alt="pre" />
          </button>
          <div className="radioContainer">
            {[0, 1, 2, 3, 4, 5].map((radio, radioIdx) => {
              return (
                <input
                  type="radio"
                  name="headerRadio"
                  key={radioIdx}
                  checked={currentSlide === radio}
                  onChange={() => {
                    this.setState({ currentSlide: radio });
                  }}
                />
              );
            })}
          </div>
        </div>
        {!this.isEmpty(saleList) && !this.isEmpty(newList) && (
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
