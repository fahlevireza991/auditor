import React, { Component } from 'react';
import './Total.css';

class Total extends Component {

  render() {
    return (
      <div className="total">
        Total Pengeluaran: <span className="total-amount">Rp 1500000</span>
      </div>
    )
  }
}

export default Total
