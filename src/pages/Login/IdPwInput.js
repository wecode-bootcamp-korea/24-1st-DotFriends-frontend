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
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.title}
          onChange={this.props.onchanging}
          loginkey={this.props.loginkey}
        />
      </div>
    );
  }
}

export default IdPwInput;
