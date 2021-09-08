import React, { Component } from 'react';

class star extends Component {
  render() {
    return (
      <div>
        {[...Array(Math.floor(this.props.grade))].map((star, index) => (
          <i className="fas fa-star" key={index} />
        ))}
      </div>
    );
  }
}

export default star;
