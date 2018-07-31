import React, { Component } from 'react'

class DogBreedForm extends Component{
    constructor(props){
        super(props);
        this.addDog=this.props.addDog;
        let {name,age,breed}=this.props;
        this.state={name:name||'', age:age||'', breed:breed||''};
    }
    handleChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=e=>{
        e.preventDefault();
        this.addDog(this.state)
    }
    render(){
        return(
            <div borderstyle='solid'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange}/>
                    <input type="text" name="breed" placeholder="Breed" value={this.state.breed} onChange={this.handleChange}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default DogBreedForm;