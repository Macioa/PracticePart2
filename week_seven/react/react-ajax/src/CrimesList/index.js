import React from 'react'

//presentational component - stateless

const CrimesList = (props)=>{
    console.log('crimes:',props)
    const crimesList = props.crimes.map((crime, i)=><li key={i}>{crime.description}</li>)
    return(
        <div>
        <h4>Crimes</h4>
            <ul>
                {crimesList}
            </ul>
        </div>
    )
}

export default CrimesList;