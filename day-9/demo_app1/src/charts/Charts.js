import React from "react";
import ChartBar from './ChartBar.js'
import './charts.css';

const Charts=(props)=>{

    const datapointValue=props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalmax=Math.max(...datapointValue);
    return (
        <div className="chats">
            {props.dataPoints.map((dataPoint)=>{
                <ChartBar
                key={dataPoint.lable}
                value={dataPoint.value}
                maxvalue={totalmax}>
                lable={dataPoint.lable}

                </ChartBar>
            })}
        </div>
    )
}
export default Charts;