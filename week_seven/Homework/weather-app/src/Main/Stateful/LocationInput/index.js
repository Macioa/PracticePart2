import React, {Component} from 'react'


class LocationInput extends Component{
    state={city:'',country:'', zip:''}
    constructor(props){
        super(props)
        this.lift=this.props.lift
    }
    handleChange=e=>{
        let filteredString = e.target.value.split('').filter(c=>!isNaN(c)).join('')
        this.setState({[e.target.name]:filteredString})
    }
    handleSubmit=e=>{
        e.preventDefault();
        this.lift(this.state)
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