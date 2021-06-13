import {React, useEffect, useState} from "react"
import "./stepOneDisplay.css"


export default function StepOneDisplay(props){
    if(props.allUrls === null ) {
        return <h4>nothing</h4>
    }


    return(
        <div className = "stepOneDisplayWrapper">
            {props.allUrls.map((a)=>{
                return(
                    <div className = "singleBlock">
                        <h1>{a["title"]}</h1>
                        <h4>{a["link"]}</h4>
                    </div>
                )
            })}
        </div>
    )
}