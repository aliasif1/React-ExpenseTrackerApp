import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    let valueArr = props.dataPoints.map(point => point.value);
    const maxValue = Math.max(...valueArr);
    
    return (
        <div className="chart">
            {props.dataPoints.map((point) => <ChartBar key={point.label} value={point.value} label={point.label} maxValue={maxValue}/>)}
        </div>
    )
}

export default Chart;
