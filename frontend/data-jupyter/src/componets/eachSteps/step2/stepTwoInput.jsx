import {React, useEffect, useState} from "react"


export default function StepTwoDisplay(props){
    if(props.allUrls === null ) {
        return <h4>nothing</h4>
    }


    return(
        <div className = "stepOneDisplayWrapper">
            {props.allUrls.map((a)=>{
                return(
                    <div className = "singleBlock">
                        <h1>{a["title"]}</h1>
                        <a target="_blank" href = {a["link"]}>{a["link"]}</a>
                    </div>
                )
            })}
        </div>
    )
}