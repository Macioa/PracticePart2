import React, { Component } from 'react';
import logo from './logo.svg';
//import './Post.css';


class Comment extends Component {
  state={body: this.props.body}
  render() {
    return (
      <div>
        <p>{this.state.body}</p>
      </div>
    );
  }
}

export default Comment;

