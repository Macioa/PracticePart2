import React from 'react'
import Single from './Single'

const Report=(props)=>{
    if (props.report&&(props.report.message!='city not found')){
        console.log('success',props.report)
        const reports=props.report.list.map((report,i)=><Single key={i} report={report}/>)

        return(
            <div>
                <h1>{props.report.city.name}</h1>
                <h7>{JSON.stringify(props.report.city.coord)}</h7>
                <h5>{props.report.city.country}</h5>
                {reports}
            </div>
        )
    } else return(<div>No Data</div>)
}

export default Report