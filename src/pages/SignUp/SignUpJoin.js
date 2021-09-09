import React, { Component } from 'react';

class SignUpJoin extends Component {
  render() {
    const { name, type, handleChange } = this.props;
    return (
      <div className="joinRow infoRow">
        <h3 className="joinTitle">{name}</h3>
        <span className="joinBox">
          <input
            className="typingArea"
            type={type}
            pattern={this.props.pattern}
            onChange={e => {
              handleChange(e.target.value);
            }}
            loginkey={this.props.loginkey}
          />
        </span>
      </div>
    );
  }
}

export default SignUpJoin;
