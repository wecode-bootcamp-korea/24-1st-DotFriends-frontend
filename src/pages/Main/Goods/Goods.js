import React, { Component } from 'react';
import './Goods.scss';

class Goods extends Component {
  render() {
    console.log(this.props);
    const { name, images } = this.props.data;
    return (
      <div className="goods">
        <img src={images[0]} alt="나와라" className="goodsImg" />
        <h2 className="goodsName">{name}</h2>
      </div>
    );
  }
}

export default Goods;