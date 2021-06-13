import {React, useEffect, useState} from "react"
import Steps from "./steps"
import "./workflow.css"
import StepOneInput from "./eachSteps/step1/stepOneInput"
import StepOneDisplay from "./eachSteps/step1/stepOneDisplay"


export default function WorkFlow() {
    const [step, setStep] = useState(0)
    const [stepOneInputPair, setStepOneInputPair] = useState({name: "", institution: ""}) 
    const [stepOneDisplay, setStepOneDisplay] = useState([])


    useEffect(()=>{
        console.log(stepOneInputPair)
    }, [stepOneInputPair])

    useEffect(()=>{
        console.log(stepOneDisplay[0])
        console.log(typeof(stepOneDisplay))
    }, [stepOneDisplay])


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
                <div>
                    <StepOneDisplay allUrls = {Object.values(stepOneDisplay)}/>
                </div>
            </div>
            <div className = "dividingStick">
               
            </div>
            <div className = "inputArea">
                <div className = "inputNoteWrapper">
                    <h3> {inputNote[step]}</h3>
                </div>
                <div className = "userInput">
                    {step === 1 ? 
                    <StepOneInput name = {stepOneInputPair.name} institution = {stepOneInputPair.institution} changInputOnePair = {s => setStepOneInputPair(s)} displayUrls = { c => setStepOneDisplay(c)}/> 
                    : step === 2 ? <h1>2step</h1> 
                    : <h1>step3</h1> }
                </div>


            </div>
        </div>
    )
}

