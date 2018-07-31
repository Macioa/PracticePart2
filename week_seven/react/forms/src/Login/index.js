import React, { Component } from 'react';

class Login extends Component {
    state={ username:'', password:'' }
    handleChange=e=>{
        this.setState({[e.target.name] : e.target.value});
    }
    render(){
        return(
            <form>
                <input type='text' name='username' onChange={this.handleChange} value={this.state.username} placeholder='username'/>
                <input type='password' name='password' onChange={this.handleChange} value={this.state.password} placeholder='password'/>
                <input type='submit' value='Submit'/>
            </form>
        )
    }
}

export default Login;