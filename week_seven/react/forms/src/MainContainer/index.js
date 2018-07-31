import React, { Component } from 'react';
import DogBreedForm from './DogBreedForm';

class MainContainer extends Component{
    state={dogs:[]}
    render(){return(
        <div>
            <h2>Main Container!</h2>
            <h4>Dogs</h4>
                {console.log()/*this.state.dogs.map((, )=><)*/}
                <br/>
                <DogBreedForm/>
                
        </div>
    )}
}

export default MainContainer;