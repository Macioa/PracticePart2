import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login' 

class App extends Component {
  state={ auth: false }
  login=(newState)=>{
    this.setState(newState);
    console.log(newState)
  }
  render() {
    return (
      <div className="App">
        <Login login={this.login}/>
      </div>
    );
  }
}

export default App;
