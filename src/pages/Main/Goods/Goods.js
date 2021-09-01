import React, { Component } from 'react';
import './Goods.scss';

class Goods extends Component {
  render() {
    return (
      <div className="goods">
        <img src="/images/1234.jpeg" alt="나와라" className="goodsImg" />
        <h2 className="goodsName">하루님</h2>
      </div>
    );
  }
}

export default Goods;
