import React, { Component } from 'react';
import './Filters.scss';

class Filters extends Component {
  render() {
    return (
      <ul className="filters">
        <li className="Filter">
          <button>인기도순</button>
        </li>
        <li className="Filter">
          <button>낮은가격순</button>
        </li>
        <li className="Filter">
          <button>높은가격순</button>
        </li>
        <li className="Filter">
          <button>최신등록순</button>
        </li>
      </ul>
    );
  }
}

export default Filters;
