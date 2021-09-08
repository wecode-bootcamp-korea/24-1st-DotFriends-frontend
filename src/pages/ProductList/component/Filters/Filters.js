import React, { Component } from 'react';
import './Filters.scss';

class Filters extends Component {
  render() {
    const { filter } = this.props;
    return (
      <ul className="filters">
        {FILTERS.map((item, idx) => (
          <li
            className={`filter ${item.class === filter ? 'active' : ''}`}
            key={idx}
          >
            <button
              id={item.class}
              onClick={e =>
                this.props.getPageOption(e.currentTarget.id, 'filter')
              }
              key={idx}
            >
              {item.type}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Filters;

const FILTERS = [
  { type: '인기도순', class: '-popular' },
  { type: '낮은가격순', class: 'price' },
  { type: '높은가격순', class: '-price' },
  { type: '최신등록순', class: '-updated_at' },
];
