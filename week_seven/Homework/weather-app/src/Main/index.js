import React, {Component} from 'react'
import LocationInput from './Stateful/LocationInput'

class Main extends Component{
    logState=()=>console.log(this.state)
    setLocation=location=>this.setState({location:location})
    render(){
        return(
            <div>
                Main
                <LocationInput lift={this.setLocation}/>
                <button onClick={this.logState}>State</button>
            </div>
        )
    }

}

export default Main;