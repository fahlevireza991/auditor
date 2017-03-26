import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  render() {
    return (
      <div className="audit-form">
        <form>
          <div className="form-group">
            <label>Expense</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input type="number" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
