import React, { Component } from 'react';
import './Filters.scss';

class Filters extends Component {
  getFilterType = e => {
    this.props.getFilterType(e.currentTarget.id);
  };

  render() {
    const { filter } = this.props;
    return (
      <ul className="filters">
        <li className={`filter ${'popular' === filter ? 'active' : ''}`}>
          <button id="popular" onClick={this.getFilterType}>
            인기도순
          </button>
        </li>
        <li className={`filter ${'lowPrice' === filter ? 'active' : ''}`}>
          <button id="lowPrice" onClick={this.getFilterType}>
            낮은가격순
          </button>
        </li>
        <li className={`filter ${'highPrice' === filter ? 'active' : ''}`}>
          <button id="highPrice" onClick={this.getFilterType}>
            높은가격순
          </button>
        </li>
        <li className={`filter ${'resent' === filter ? 'active' : ''}`}>
          <button id="resent" onClick={this.getFilterType}>
            최신등록순
          </button>
        </li>
      </ul>
    );
  }
}

export default Filters;
