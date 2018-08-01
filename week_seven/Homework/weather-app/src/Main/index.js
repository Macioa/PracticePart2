import React, {Component} from 'react'
import SettingsInput from './Stateful/SettingsInput'
import Report from './Presentational/Report'

class Main extends Component{
    state={
        appId: require('../appId'),
        reportType: '_5day',
        connect:{
            _current:'https://api.openweathermap.org/data/2.5/weather?zip=',
            _5day:'https://api.openweathermap.org/data/2.5/forecast?zip=',
            _16day: 'https://api.openweathermap.org/data/2.5/forecast/daily?zip='
        },
        report:null,
        location:{}
    }
    receiveState=(newState)=>{this.setState(newState); console.log(newState)}
    update=()=>{
        this.getWeather(this.state.connect[this.state.reportType], this.state.zip).then(
            weatherData=>this.setState({report:weatherData}).then(console.log('done'))
        )
    }    
    getWeather=async(connectionString)=>{
         try{
            let string = `${connectionString}${this.state.zip},us&APPID=${this.state.appId}`;
            console.log(`Connecting to ${string}`)
            const weather = await fetch(string)
            const parsedWeather = await weather.json();
            return parsedWeather;
        } catch(err){
            console.error(err);
        }
    }
    render(){
        return(
            <div>
                <SettingsInput lift={this.receiveState} update={this.update} zip={this.state.zip}/>
                <Report report={this.state.report}/>
            </div>
        )
    }

}

export default Main;