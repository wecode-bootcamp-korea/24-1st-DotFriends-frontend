import React, { Component } from 'react';
import ImageFooter from './ImageFooter/ImageFooter';
import TextFooter from './TextFooter/TextFooter';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ImageFooter />
        <TextFooter />
      </div>
    );
  }
}

export default Footer;
