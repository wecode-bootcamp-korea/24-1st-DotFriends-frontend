import React, { Component } from 'react';
import './ViewController.scss';

class ViewController extends Component {
  getViewCount = e => {
    this.props.getViewCount(e.target.id);
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
              {PAGE_SIZE.map(size => (
                <li className="listItem">
                  <button onClick={this.getViewCount} id={size.id}>
                    {size.text}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="controller">
          {BTN_TYPE.map((item, idx) => (
            <button
              className={`${item.type} ${
                item.type === viewType ? 'active' : ''
              }`}
              onClick={e => {
                this.props.getPageOption(e.currentTarget.id, 'viewType');
              }}
              id={item.type}
              key={idx}
            >
              <i className={item.icon} />
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default ViewController;

const BTN_TYPE = [
  { type: 'listView', icon: 'fas fa-th-list' },
  { type: 'imgView', icon: 'fas fa-th-large' },
  { type: 'bigImgView', icon: 'fas fa-window-restore' },
  { type: 'galleryView', icon: 'fas fa-square' },
];

const PAGE_SIZE = [
  {
    text: '10개씩 보기',
    id: 10,
  },
  {
    text: '20개씩 보기',
    id: 20,
  },
  {
    text: '30개씩 보기',
    id: 30,
  },
];
