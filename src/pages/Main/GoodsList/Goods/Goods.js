import React, { Component } from 'react';
import './Goods.scss';

class Goods extends Component {
  render() {
    return (
      <div className="goods">
        <div className="goodsImg">
          <img src="/images/1234.jpeg" alt="나와라" />
        </div>
        <div className="goodsName">
          <h2>하루님</h2>
        </div>
      </div>
    );
  }
}

export default Goods;
