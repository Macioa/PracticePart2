import React, { Component } from 'react';

class Puppy extends Component{
    constructor(props){
        super(props)
        this.state={name: this.props.name||'', age: this.props.age||'', breed: this.props.breed||''};
    }
    render(){
        return(
            <div borderstyle='solid'>
                <h4>Name</h4>
                <p>{this.state.name}</p>
                <h6>Age</h6>
                <p>{this.state.age}</p>
                <h6>Breed</h6>
                <p>{this.state.breed}</p>
            </div>
        )
    }
}

export default Puppy