import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Main from './Main'

class App extends Component {
  state={auth:false}
  login=auth=>this.setState({auth:auth});
  render() {
    return (
      <div className="App">
        {this.state.auth? <Main/> : <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;
