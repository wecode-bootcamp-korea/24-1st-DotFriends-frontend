import React, { Component } from 'react';
import Headers from './Headers/Headers';
import NewList from './GoodsList/NewList/NewList';
import OnSaleList from './GoodsList/NewList/OnSaleList';
import ImageFooter from '../../components/Footer/ImageFooter/ImageFooter';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Headers />
        <NewList />
        <OnSaleList />
        <ImageFooter />
      </div>
    );
  }
}

export default Main;
