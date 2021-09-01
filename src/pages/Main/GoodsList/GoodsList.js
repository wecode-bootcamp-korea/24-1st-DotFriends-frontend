import React, { Component } from 'react';
import Goods from './Goods/Goods';
import './GoodsList.scss';

class GoodsList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="goodsList">
        <h1>{this.props.title}</h1>
        <ul className="listContainer">
          <div className="pre" onClick={this.prevSlide}></div>
          <li className="list" id={this.state.id}>
            <Goods />
            <Goods />
            <Goods />
            <Goods />
          </li>
          <li className="list" id="list02">
            <Goods />
            <Goods />
            <Goods />
            <Goods />
          </li>
          <li className="list" id="list03">
            <Goods />
            <Goods />
            <Goods />
            <Goods />
          </li>
          <div className="next" onClick={this.nextSlide}></div>
        </ul>

        <div className="radioContainer">
          <input
            type="radio"
            name="listBtn"
            id="btn01"
            onClick={this.useEffect}
          />
          <input
            type="radio"
            name="listBtn"
            id="btn02"
            onClick={this.useEffect}
          />
          <input
            type="radio"
            name="listBtn"
            id="btn03"
            onClick={this.useEffect}
          />
        </div>
      </div>
    );
  }
}

export default GoodsList;
