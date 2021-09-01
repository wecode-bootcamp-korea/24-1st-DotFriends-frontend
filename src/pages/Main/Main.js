import React, { Component } from 'react';
import GoodsList from './GoodsList/GoodsList';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <>
        <div className="headers">Headers</div>
        <GoodsList title="새로 나왔어요" name="newList" />
        <GoodsList title="싸게 팔아요" name="saleList" />
        <div className="bottomImage">BottomImage</div>
      </>
    );
  }
}

export default Main;
