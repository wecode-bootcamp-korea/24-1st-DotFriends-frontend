import React, { Component } from 'react';

class IdPwInput extends Component {
  render() {
    return (
      <div className="idPwCell">
        <span className="iconSize">
          <i className="far fa-user faIcon"></i>
        </span>
        <input
          className="inputIdPw"
          type={this.props.type}
          placeholder={this.props.name}
          onChange={this.props.onchanging}
          loginkey={this.props.loginkey}
        />
      </div>
    );
  }
}

export default IdPwInput;
