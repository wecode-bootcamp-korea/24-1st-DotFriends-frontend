import React, { Component } from 'react';
import GoodsList from './GoodsList/GoodsList';
import './Main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      newList: {},
      saleList: {},
    };
  }
  componentDidMount() {
    const config = {
      method: 'get',
    };

    fetch('http://10.58.2.21:8000/product?option=new&limit=12', config)
      .then(response => response.json())
      .then(response => this.setState({ newList: response }));

    fetch('http://10.58.2.21:8000/product?option=sale&limit=12', config)
      .then(response => response.json())
      .then(response => this.setState({ saleList: response }));
  }

  isTrue = () => {
    if (this.state.saleList !== {} && this.state.newList !== {}) return true;
  };

  render() {
    const { saleList, newList } = this.state;

    return (
      <div className="main">
        {this.isTrue ? (
          <>
            <div className="headers">Headers</div>
            <GoodsList title="새로 나왔어요" name="newList" data={newList} />
            <GoodsList title="싸게 팔아요" name="saleList" data={saleList} />
            <div className="bottomImage">BottomImage</div>
          </>
        ) : null}
      </div>
    );
  }
}

export default Main;
