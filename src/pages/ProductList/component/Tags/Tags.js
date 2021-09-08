import React, { Component } from 'react';
import './Tags.scss';

class Tags extends Component {
  render() {
    return (
      <div className="tags">
        {this.props.isBest && <p>BEST</p>}
        {this.props.isNew && <p>NEW</p>}
      </div>
    );
  }
}

export default Tags;
