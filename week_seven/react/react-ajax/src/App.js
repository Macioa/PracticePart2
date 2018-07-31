import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CrimesList from './CrimesList';

class App extends Component {
  constructor(){
    super()

    this.state={crimes:[]}
    this.getCrimes().then((data)=>this.setState({crimes:data}))
  }
  getCrimes = async()=>{//from chicago crimes endpoint
    try{//using js fetch, superagent and axios are also used with ajax
      const crimes = await fetch('https://data.cityofchicago.org/resource/crimes.json')
      //fetch by default makes a get request
      const crimesJson = await crimes.json() //parse json response
      return crimesJson;
    }catch(err){
      console.error(err)
    }
  }
  render() {
    return (
      <div className="App">
        <CrimesList crimes={this.state.crimes}/>
      </div>
    );
  }
}

export default App;
