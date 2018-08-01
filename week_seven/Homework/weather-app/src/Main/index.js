import React, {Component} from 'react'
import LocationInput from './Stateful/LocationInput'

class Main extends Component{
    state={
        appId: '',
        reportType: '_5day',
        connect:{
            _current:'https://api.openweathermap.org/data/2.5/weather?zip=',
            _5day:'https://api.openweathermap.org/data/2.5/forecast?zip=',
            _16day: 'https://api.openweathermap.org/data/2.5/forecast/daily?zip='
        }
    }
    logState=()=>console.log(this.state)
    setLocation=location=>this.setState({location:location})
    getWeather=async(connectionString)=>{
         try{
            const weather = await fetch(`${connectionString}${this.state.location.zip},us&APPID=${this.state.appId}`)
        } catch(err){
            console.error(err);
        }
    }
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