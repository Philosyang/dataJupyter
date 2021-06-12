import {React, useEffect, useState} from "react"
import Steps from "./steps"
import "./workflow.css"
import StepOneInput from "./eachSteps/step1/stepOneInput"

export default function WorkFlow() {
    const [step, setStep] = useState(0)
    const [stepOneInputPair, setStepOneInputPair] = useState({name: "", institution: ""}) 

    return(
        <div className = "WorkFlowWrapper">
            <div className = "displayArea">
                <h1>displyaer</h1>
                <h1>{step}</h1>
                <Steps 
                changeStep = {
                    s => setStep(s) 
                }
                />
            </div>
            <div className = "dividingStick">
               
            </div>
            <div className = "inputArea">
                <h1> input</h1>
                {step == 1 ? 
                <StepOneInput name = {stepOneInputPair.name} insti = {stepOneInputPair.institution} changInputOnePair = {s => setStepOneInputPair(s)}/> 
                : step == 2 ? <h1>2step</h1> 
                : <h1>step3</h1> }

            </div>
        </div>
    )
}

