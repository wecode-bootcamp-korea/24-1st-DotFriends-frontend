import React, { Component } from 'react';

class SingUpIdPw extends Component {
  render() {
    return (
      <div className="joinRow">
        <h3 className="joinTitle">{this.props.title}</h3>
        <span className="joinBox">
          <input
            className="typingArea"
            name={this.props.name}
            type={this.props.type}
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
