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
          <button>
            <i className="fas fa-th-list" />
          </button>
          <button>
            <i className="fas fa-th-large" />
          </button>
          <button>
            <i className="fas fa-window-restore" />
          </button>
          <button>
            <i class="fas fa-square" />
          </button>
        </div>
      </div>
    );
  }
}

export default ViewController;
