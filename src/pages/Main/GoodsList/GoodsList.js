import React, { Component } from 'react';
import Goods from '../Goods/Goods';
import './GoodsList.scss';

class GoodsList extends Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 0,
      TOTAL_SLIDES: 2,
      btn01: true,
      btn02: false,
      btn03: false,
    };
  }

  handleChecked = () => {
    let { currentSlide } = this.state;
    if (currentSlide === 0)
      this.setState({ btn01: true, btn02: false, btn03: false });
    if (currentSlide === 1)
      this.setState({ btn01: false, btn02: true, btn03: false });
    if (currentSlide === 2)
      this.setState({ btn01: false, btn02: false, btn03: true });
  };

  handlePrevSlide = () => {
    let { currentSlide } = this.state;
    if (currentSlide > 0) {
      this.setState({ currentSlide: currentSlide - 1 });
      this.handleChecked();
    } else {
      this.setState({ currentSlide: 2 });
      this.handleChecked();
    }
  };

  handleNextSlide = () => {
    let { currentSlide, TOTAL_SLIDES } = this.state;
    if (currentSlide < TOTAL_SLIDES) {
      this.setState({ currentSlide: currentSlide + 1 });
      this.handleChecked();
    } else {
      this.setState({ currentSlide: 0 });
      this.handleChecked();
    }
  };

  handleRadio01 = () =>
    this.setState({ currentSlide: 0, btn01: true, btn02: false, btn03: false });
  handleRadio02 = () =>
    this.setState({ currentSlide: 1, btn01: false, btn02: true, btn03: false });
  handleRadio03 = () =>
    this.setState({ currentSlide: 2, btn01: false, btn02: false, btn03: true });

  render() {
    const { currentSlide, btn01, btn02, btn03 } = this.state;
    const { title, name, data } = this.props;
    console.log({ data }[0]);
    return (
      <div className="goodsList">
        <h1>{title}</h1>
        <ul className="listContainer">
          <div className="pre" onClick={this.handlePrevSlide}></div>
          <li
            className="list"
            style={{
              transform: `translateX(-${currentSlide}00%)`,
              transition: 'all 0.5s ease-in-out',
            }}
          >
            <Goods name={data.id} />
            <Goods name={data.id} />
            <Goods name={data.id} />
            <Goods name={data.id} />
          </li>
          <li
            className="list"
            style={{
              transform: `translateX(-${currentSlide}00%)`,
              transition: 'all 0.5s ease-in-out',
            }}
          >
            <Goods />
            <Goods />
            <Goods />
            <Goods />
          </li>
          <li
            className="list"
            style={{
              transform: `translateX(-${currentSlide}00%)`,
              transition: 'all 0.5s ease-in-out',
            }}
          >
            <Goods />
            <Goods />
            <Goods />
            <Goods />
          </li>
          <div className="next" onClick={this.handleNextSlide}></div>
        </ul>

        <div className="radioContainer">
          <input
            type="radio"
            name={name}
            onChange={this.handleRadio01}
            checked={btn01}
          />
          <input
            type="radio"
            name={name}
            onChange={this.handleRadio02}
            checked={btn02}
          />
          <input
            type="radio"
            name={name}
            onChange={this.handleRadio03}
            checked={btn03}
          />
        </div>
      </div>
    );
  }
}

export default GoodsList;
