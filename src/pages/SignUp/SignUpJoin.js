import React, { Component } from 'react';

class SignUpJoin extends Component {
  render() {
    return (
      <div className="joinRow infoRow">
        <h3 className="joinTitle">이름</h3>
        <span className="joinBox">
          <input
            className="typingArea"
            type="text"
            value={this.props.name}
            onChange={this.props.onchangeName}
            loginkey={this.props.loginkey}
          />
        </span>
      </div>
    );
  }
}

export default SignUpJoin;
