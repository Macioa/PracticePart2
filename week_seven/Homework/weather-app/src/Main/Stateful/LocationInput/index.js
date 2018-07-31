import React, {Component} from 'react'


class LocationInput extends Component{
    state={city:'',country:'', zip:''}
    handleChange=e=>{
        let filteredString = e.target.value.split('').filter(c=>!isNaN(c)).join('')

        console.log(filteredString)
        this.setState({[e.target.name]:filteredString})

    }
    handleSubmit=e=>{
        e.preventDefault();
    }
    render(){
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                {/*<input type='text' name='city' placeholder='City Name' onChange={this.handleChange}/>
                <input type='text' name='country' placeholder='Country Code' onChange={this.handleChange}/>*/}
                <input name='zip' type='text' maxLength='5' placeholder='ZIP' value={this.state.zip} onChange={this.handleChange}/>
                <br/>
                <input type='submit'/>
               
               </form>
            </div>
        )
    }

}

export default LocationInput;