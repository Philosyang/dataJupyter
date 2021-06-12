import {React, useEffect, useState} from "react"
import Steps from "./steps"
import "./workflow.css"
import StepOneInput from "./eachSteps/step1/stepOneInput"

export default function WorkFlow() {
    const [step, setStep] = useState(0)
    const [stepOneInputPair, setStepOneInputPair] = useState({name: "", institution: ""}) 


    useEffect(()=>{
        console.log(stepOneInputPair)
    }, [stepOneInputPair])


    const inputNote = {
        1: "Step 1: please provide the name and insitution of the faculty member you interested in, then the result of google search will be presented."
    }


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
                <div className = "inputNoteWrapper">
                    <h3> {inputNote[step]}</h3>
                </div>
                <div className = "userInput">
                    {step == 1 ? 
                    <StepOneInput name = {stepOneInputPair.name} institution = {stepOneInputPair.institution} changInputOnePair = {s => setStepOneInputPair(s)}/> 
                    : step == 2 ? <h1>2step</h1> 
                    : <h1>step3</h1> }
                </div>


            </div>
        </div>
    )
}

