import React, { Component } from 'react';
import './ViewController.scss';

class ViewController extends Component {
  getViewCount = e => {
    this.props.getViewCount(e.target.id);
  };

  getViewMode = e => {
    this.props.getViewMode(e.currentTarget.id);
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
                <button onClick={this.getViewCount} id="2">
                  2개씩 보기
                </button>
              </li>
              <li className="listItem">
                <button onClick={this.getViewCount} id="4">
                  4개씩 보기
                </button>
              </li>
              <li className="listItem">
                <button onClick={this.getViewCount} id="6">
                  6개씩 보기
                </button>
              </li>
            </ul>
          )}
        </div>

        <div className="controller">
          <button
            className={`listView ${'listView' === viewType ? 'active' : ''}`}
            onClick={this.getViewMode}
            id="listView"
          >
            <i className="fas fa-th-list" />
          </button>
          <button className="imgView" onClick={this.getViewMode} id="imgView">
            <i className="fas fa-th-large" />
          </button>
          <button
            className="bigImgView"
            onClick={this.getViewMode}
            id="bigImgView"
          >
            <i className="fas fa-window-restore" />
          </button>
          <button
            className="galleryView"
            onClick={this.getViewMode}
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
