import React, { Component } from 'react';
import './Pagination.scss';

class Pagination extends Component {
  render() {
    const { currentPage, pageCount } = this.props;
    return (
      <div className="pagination">
        {!!pageCount &&
          [...Array(pageCount)].map((page, idx) => (
            <button
              className={`page ${idx + 1 === currentPage ? 'current' : ''}`}
              key={idx + 1}
              id={idx + 1}
              onClick={e => {
                this.props.getPageOption(Number(e.currentTarget.id), 'page');
              }}
            >
              {idx + 1}
            </button>
          ))}
      </div>
    );
  }
}

export default Pagination;
