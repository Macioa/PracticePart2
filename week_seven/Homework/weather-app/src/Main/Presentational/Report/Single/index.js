import React from 'react'

const KtoF =k=>{return ((k*9/5)-459.67)}

const Single = (props)=>{
    console.log(props)
    if (props.report){

        const {temp, temp_min, temp_max, pressure, sea_level, grnd_level, humidity, temp_kf}=props.report.main;

        return(
            <div>
                <h2>{props.report.dt_txt}</h2>
                <p>
                {JSON.stringify(props.report.main)}</p>
                <h4>Weather</h4>
                <p>{props.report.weather[0].description}</p>
                <h5>Rain</h5>
                <p>{JSON.stringify(props.report.rain)}</p>
                <h5>Wind</h5>
                <p>{JSON.stringify(props.report.wind)}</p>
            </div>
        )
    } else return <div/>
}

export default Single