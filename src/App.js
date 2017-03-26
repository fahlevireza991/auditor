import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import ListBox from './components/ListBox/ListBox.js';
import Form from './components/Form/Form.js';
import Total from './components/Total/Total.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    expenses: []
  }

  componentWillMount() {
    fetch('http://localhost:8080/api/expense')
      .then(response => response.json())
      .then(json => {
        this.setState({
          expenses: json
      })
    });
  }

  // constructor(props) {
  //   super(props);
  //   this.onChange = this.onChange.bind(this);
  // }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Form />
          <Total />
          {
            this.state.expenses.map((item, index) => (
              <ListBox name={item.name} amount={item.amount} date={item.date} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
