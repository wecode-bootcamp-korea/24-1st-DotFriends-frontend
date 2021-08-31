import React, { Component } from 'react';
import './ViewController.scss';

class ViewController extends Component {
  render() {
    return (
      <div className="viewController">
        <button>
          20개씩 보기
          <span></span>
        </button>
        <div className="controller">
          <button className="listView">
            <i className="fas fa-th-list" />
          </button>
          <button className="imgView">
            <i className="fas fa-th-large" />
          </button>
          <button className="bigImgView active">
            <i className="fas fa-window-restore" />
          </button>
          <button className="galleryView">
            <i className="fas fa-square" />
          </button>
        </div>
      </div>
    );
  }
}

export default ViewController;
