import React, { Component } from 'react';
import DogBreedForm from './DogBreedForm';
import PuppyList from './PuppyList';

class MainContainer extends Component{
    state={dogs:[]}
    addDog=(dog)=>{
        console.log(dog)
        this.setState({dogs: this.state.dogs.concat([dog])})
        console.log(this.state.dogs)
    }
    render(){return(
        <div>
            <h2>Main Container!</h2>
            <h6>Add Dog</h6>
                <DogBreedForm addDog={this.addDog}/>
            <br/>
            <h3>Dogs</h3>
                <PuppyList dogs={this.state.dogs}/>
                
        </div>
    )}
}

export default MainContainer;