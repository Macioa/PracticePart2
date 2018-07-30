import React, { Component } from 'react';

class Hello extends Component {
  state={user: this.props.user}
  render(){
    return (
      <div>
          <h1>Hello {this.state.user||'World'}</h1>
          <p>
              <img width='100px' {...this.props}/>
              <img width='200px' src="https://images.pexels.com/photos/1244159/pexels-photo-1244159.jpeg?cs=srgb&dl=4k-wallpaper-blur-close-up-1244159.jpg&fm=jpg" alt = "img from pexels.com"/>
          </p>
      </div>
    )
  }
}

export default Hello;
