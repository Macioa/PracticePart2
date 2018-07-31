
import React, { Component } from 'react';

class Login extends Component {
    state = {}
    constructor(props){
        super(props)
        this.login=this.props.login
    }
    handleChange=e=>{
        this.setState({[e.target.name] : e.target.value.length ? e.target.value:false});
    }
    handleSubmit=e=>{
        e.preventDefault();
        this.login({auth:this.state.username})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='username' onChange={this.handleChange} value={this.state.username} placeholder='username'/>
                <input type='password' name='password' onChange={this.handleChange} value={this.state.password} placeholder='password'/>
                <br/>
                <input type='submit' value='Submit'/>
            </form>
        )
    }
}

export default Login;