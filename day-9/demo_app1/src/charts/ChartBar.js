import React from "react";
import './ChartBar.css';

const ChartBar=(props)=>{
    let chartHeight='0%';

    if(props.max>0){
        chartHeight = Math.round(props.value / props.maxValue) * 100  + '%';
    }

    return(
        <div className="chart-bar">
            <div className="chart-bar-inner">
                <div className="chart-bar-fill" style={{height:chartHeight}}>

                </div>
                <div className="chart-bar-label">{props.label}

                </div>
            </div>

        </div>
    )
}

export default ChartBar;