import React, { Component } from 'react';

class IdPwInput extends Component {
  render() {
    const { input, onchanging } = this.props;
    const { name, type, title } = input;

    return (
      <div className="idPwCell">
        <span className="iconSize">
          <i className="far fa-user faIcon"></i>
        </span>
        <input
          className="inputIdPw"
          name={name}
          type={type}
          placeholder={title}
          onChange={onchanging}
        />
      </div>
    );
  }
}

export default IdPwInput;
