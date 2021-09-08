import React, { Component } from 'react';

class SingUpIdPw extends Component {
  render() {
    return (
      <div className="joinRow">
        <h3 className="joinTitle">{this.props.name}</h3>
        <span className="joinBox">
          <input
            className="typingArea"
            type={this.props.type}
            // value={this.props.id}
            onChange={this.props.onchange}
            loginkey={this.props.loginkey}
          />
        </span>
        {this.props.idPwCheck && (
          <span className="errorNextBox">{this.props.idAlert}</span>
        )}
      </div>
    );
  }
}

export default SingUpIdPw;
