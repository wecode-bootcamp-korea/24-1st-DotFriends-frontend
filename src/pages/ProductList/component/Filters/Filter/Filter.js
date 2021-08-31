import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {
  render() {
    const { item } = this.props;
    return (
      <li className="Filter">
        <button>{item}</button>
      </li>
    );
  }
}

export default Filter;
