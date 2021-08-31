import React, { Component } from 'react';
import Filter from './Filter/Filter';
import './Filters.scss';

class Filters extends Component {
  render() {
    return (
      <ul className="filters">
        {FILTER_TITLE.map((item, idx) => (
          <Filter key={idx} item={item} />
        ))}
      </ul>
    );
  }
}

export default Filters;

const FILTER_TITLE = ['인기도순', '낮은가격순', '높은가격순', '최신등록순'];
