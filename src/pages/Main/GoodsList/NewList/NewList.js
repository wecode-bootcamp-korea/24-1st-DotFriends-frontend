import React, { Component } from 'react';
import GoodsList from '../GoodsList';

class NewList extends Component {
  render() {
    return (
      <div className="newList">
        <GoodsList title="새로 나왔어요" />
      </div>
    );
  }
}

export default NewList;
