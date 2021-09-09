import React, { Component } from 'react';

class SignUpJoin extends Component {
  render() {
    const { input, handleChange } = this.props;
    const { title, name, type, validation, idAlert } = input;
    return (
      <div className="joinRow infoRow">
        <h3 className="joinTitle">{title}</h3>
        <span className="joinBox">
          <input
            className="typingArea"
            name={name}
            type={type}
            onChange={handleChange}
          />
        </span>
        {validation && <span className="errorNextBox">{idAlert}</span>}
      </div>
    );
  }
}

export default SignUpJoin;
