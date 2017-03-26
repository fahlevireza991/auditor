import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo pull-left">
            Personal Auditor
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
