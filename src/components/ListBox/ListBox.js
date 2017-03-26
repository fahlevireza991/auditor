import React, { Component } from 'react';
import './ListBox.css';

class ListBox extends Component {

  render() {
    return(
      <div className="list-box clearfix">
        <div className="list-box-name">
          {this.props.name}
        </div>
        <div className="list-box-detail">
          <p className="list-box-detail__amount pull-left">{this.props.amount}</p>
          <p className="list-box-detail__date pull-right">{this.props.date}</p>
        </div>
      </div>
    );
  }
}

export default ListBox;
