import React, {Component} from 'react'
import LocationInput from './Stateful/LocationInput'

class Main extends Component{
    state={
        appId: require('../appId'),
        reportType: '_5day',
        connect:{
            _current:'https://api.openweathermap.org/data/2.5/weather?zip=',
            _5day:'https://api.openweathermap.org/data/2.5/forecast?zip=',
            _16day: 'https://api.openweathermap.org/data/2.5/forecast/daily?zip='
        },
        report:'none'
    }
    logState=()=>console.log(this.state)
    setLocation=(location)=>{
        this.getWeather(this.state.connect[this.state.reportType], location.zip).then(
            weatherData=>this.setState({location:location, report:weatherData})
        )
    }    
    getWeather=async(connectionString,zip)=>{
         try{
            const weather = await fetch(`${connectionString}${zip},us&APPID=${this.state.appId}`)
            const parsedWeather = await weather.json();
            return parsedWeather;
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