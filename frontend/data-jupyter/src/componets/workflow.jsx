import {React, useEffect, useState} from "react"
import Steps from "./steps"
import "./workflow.css"

export default function WorkFlow() {
    return(
        <div className = "WorkFlowWrapper">
            <div className = "displayArea">
                <h1>displyaer</h1>
                <Steps/>
                
            </div>
            <div className = "dividingStick">
               
            </div>
            <div className = "inputArea">
                <h1> input</h1>
            </div>
        </div>
    )
}

