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

  isEmpty = param => {
    return Object.keys(param).length === 0;
  };

  componentDidMount() {
    const config = {
      method: 'get',
    };

    fetch('http://10.58.6.29:8000/product?option=new&limit=12', config)
      .then(response => response.json())
      .then(response => this.setState({ newList: response.results }));

    fetch('http://10.58.6.29:8000/product?option=sale&limit=12', config)
      .then(response => response.json())
      .then(response => this.setState({ saleList: response.results }));
  }

  render() {
    const { saleList, newList } = this.state;
    console.log(!this.isEmpty(saleList));
    return (
      <div className="main">
        <div className="headers">Header</div>
        {!this.isEmpty(saleList) && (
          <>
            <GoodsList
              title="새로 나왔어요"
              name="newList"
              responseData={newList}
            />
            <GoodsList
              title="싸게 팔아요"
              name="saleList"
              responseData={saleList}
            />
          </>
        )}
        <div className="bottomImage">
          <p className="title">DOT FRIENDS</p>
          <div className="textContainer">
            <p>끝없는 데일리 미팅의 재미</p>
            <p>라인프렌즈는 아니고 클론코딩 프로젝트</p>
            <p>#위코드 #클론코딩 #프로젝트 #전우애</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
