import React, { Component } from 'react';
import logo from './logo.svg';
import Comment from './Comment'
//import './Post.css';


class Post extends Component {
  state={
    title: this.props.title,
    author: this.props.author,
    body: this.props.body,
    comments: ["a","b","c"]
  }

  editBody=(e)=>{
    this.setState({body: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>By {this.state.author}</p>
        <div>
          <p>{this.state.body}</p>
        </div>
        <h3>Comments:</h3>
          {this.state.comments.map((comment)=><Comment body={comment}/>)}      
      </div>
    );
  }
}

export default Post;

