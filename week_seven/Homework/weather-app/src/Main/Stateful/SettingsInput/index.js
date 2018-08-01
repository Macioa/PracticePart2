import React, {Component} from 'react'


class SettingsInput extends Component{
    
    constructor(props){
        super(props)
        this.lift=props.lift;
        this.update=props.update;
    }
    handleChange=e=>{
        let filteredString = e.target.value.split('').filter(c=>!isNaN(c)).join('')
        this.lift({zip:filteredString})
    }
    handleSubmit=e=>{
        e.preventDefault();
        this.update();
    }
    render(){
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
               ZIP: 
                {/*<input type='text' name='city' placeholder='City Name' onChange={this.handleChange}/>
                <input type='text' name='country' placeholder='Country Code' onChange={this.handleChange}/>*/}
                <input name='zip' type='text' minLength='5' maxLength='5' placeholder='ZIP' value={this.props.zip} onChange={this.handleChange}/>
                <br/>
                <input type='submit'/>
               
               </form>
            </div>
        )
    }

}

export default SettingsInput;