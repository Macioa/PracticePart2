import React, { Component } from 'react'
import Puppy from './Puppy'

class PuppyList extends Component{
    constructor(props){
        super(props);
        this.state={puppies: this.props.dogs};
    }
    render(){
        return(
            this.state.puppies.map((pup)=><Puppy name={pup.name} age={pup.age} breed={pup.breed}/>)
        )
    }
}

export default PuppyList;