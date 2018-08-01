import React from 'react'

const KtoF =k=>{return (((k*9/5)-459.67).toFixed(0))}

const Single = (props)=>{
    console.log(props)
    if (props.report){
        const deg=new DOMParser().parseFromString(`<!doctype html><body>&#176`, 'text/html').body.textContent
        const {temp, temp_min, temp_max, pressure, sea_level, grnd_level, humidity, temp_kf}=props.report.main;

        return(
            <div>
                <h2>{props.report.dt_txt}</h2>
                <h3>{props.report.weather[0].description}</h3>
                    <p>{KtoF(temp)}{deg}</p>
                    <p>Low: {KtoF(temp_min)}{deg}   High: {KtoF(temp_max)}{deg}   Humidity: {humidity}%</p>
                    <br/>
                    <p>Pressure: {pressure}in   Sea Level: {sea_level}   Ground Level: {grnd_level}</p>
                    <p>Wind speed: {props.report.wind.speed}mph   direction: {props.report.wind.deg.toFixed(0)}{deg}</p>
                <br/>
            </div>
        )
    } else return <div/>
}

export default Single