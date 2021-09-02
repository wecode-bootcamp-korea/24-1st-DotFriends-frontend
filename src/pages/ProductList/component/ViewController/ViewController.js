import React, { Component } from 'react';
import './ViewController.scss';

class ViewController extends Component {
  getViewCount = e => {
    this.props.getViewCount(e.target.id);
  };

  getViewType = e => {
    this.props.getViewType(e.currentTarget.id);
  };

  render() {
    const { isClickedView, view, viewType } = this.props;
    return (
      <div className="viewController">
        <div className="viewCount">
          <button onClick={this.props.handleViewCount}>
            {view}개씩 보기
            <span className=""></span>
          </button>
          {isClickedView && (
            <ul className="viewList">
              <li className="listItem">
                <button onClick={this.getViewCount} id="10">
                  10개씩 보기
                </button>
              </li>
              <li className="listItem">
                <button onClick={this.getViewCount} id="20">
                  20개씩 보기
                </button>
              </li>
              <li className="listItem">
                <button onClick={this.getViewCount} id="30">
                  30개씩 보기
                </button>
              </li>
            </ul>
          )}
        </div>

        <div className="controller">
          <button
            className={`listView ${'listView' === viewType ? 'active' : ''}`}
            onClick={this.getViewType}
            id="listView"
          >
            <i className="fas fa-th-list" />
          </button>
          <button
            className={`imgView ${'imgView' === viewType ? 'active' : ''}`}
            onClick={this.getViewType}
            id="imgView"
          >
            <i className="fas fa-th-large" />
          </button>
          <button
            className={`bigImgView ${
              'bigImgView' === viewType ? 'active' : ''
            }`}
            onClick={this.getViewType}
            id="bigImgView"
          >
            <i className="fas fa-window-restore" />
          </button>
          <button
            className={`galleryView ${
              'galleryView' === viewType ? 'active' : ''
            }`}
            onClick={this.getViewType}
            id="galleryView"
          >
            <i className="fas fa-square" />
          </button>
        </div>
      </div>
    );
  }
}

export default ViewController;
