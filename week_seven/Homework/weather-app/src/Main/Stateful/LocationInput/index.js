import React, {Component} from 'react'

class LocationInput extends Component{
    state={city:'',country:''}
    handleChange=e=>this.setState({[e.target.name]:e.target.value})
    handleSubmit=e=>{
        e.preventDefault();
    }
    render(){
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                <input type='text' name='city' placeholder='City Name' onChange={this.handleChange}/>
                <input type='text' name='country' placeholder='Country Code' onChange={this.handleChange}/>
                <br/>
                <input type='submit'/>
               
               </form>
            </div>
        )
    }

}

export default LocationInput;