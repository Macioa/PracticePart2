import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import MainContainer from './MainContainer';

class App extends Component {
  state={ auth: false }
  login=(newState)=>{
    this.setState(newState);
  }
  render() {
    console.log(this.state.auth)
    return (
      <div className="App">
        {this.state.auth? <MainContainer/> : <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;
