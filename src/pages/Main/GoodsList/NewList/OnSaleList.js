import React, { Component } from 'react';
import GoodsList from '../GoodsList';

class OnSaleList extends Component {
  render() {
    return (
      <div className="onSaleList">
        <GoodsList title="싸게 팔아요" />
      </div>
    );
  }
}

export default OnSaleList;
