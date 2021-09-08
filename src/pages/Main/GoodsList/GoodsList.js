import React, { Component } from 'react';
import Goods from '../Goods/Goods';
import './GoodsList.scss';

class GoodsList extends Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 0,
      TOTAL_SLIDES: 2,
    };
  }

  handlePrevSlide = () => {
    let { currentSlide } = this.state;
    if (currentSlide > 0) {
      this.setState({ currentSlide: currentSlide - 1 });
    } else {
      this.setState({ currentSlide: 2 });
    }
  };

  handleNextSlide = () => {
    let { currentSlide, TOTAL_SLIDES } = this.state;
    if (currentSlide < TOTAL_SLIDES) {
      this.setState({ currentSlide: currentSlide + 1 });
    } else {
      this.setState({ currentSlide: 0 });
    }
  };

  render() {
    const { currentSlide } = this.state;
    const { title, name, responseData } = this.props;
    return (
      <div className="goodsList">
        <h1>{title}</h1>
        <div className="listConatiner">
          <ul className="totalList">
            {[0, 4, 8].map((listELe, listIdx) => {
              return (
                <li
                  key={listIdx}
                  className="list"
                  style={{
                    transform: `translateX(-${currentSlide}00%)`,
                    transition: 'all 0.5s ease-in-out',
                  }}
                >
                  {responseData.slice(listELe, listELe + 4).map(data => (
                    <Goods data={data} />
                  ))}
                </li>
              );
            })}
          </ul>
        </div>
        <button className="pre" onClick={this.handlePrevSlide}>
          <img src="/images/pre.png" alt="pre" />
        </button>
        <button className="next" onClick={this.handleNextSlide}>
          <img src="/images/next.png" alt="next" />
        </button>

        <div className="radioContainer">
          {[0, 1, 2].map((radio, radioIdx) => {
            return (
              <input
                key={radioIdx}
                type="radio"
                name={name}
                checked={currentSlide === radio}
                onChange={() => this.setState({ currentSlide: radio })}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default GoodsList;
