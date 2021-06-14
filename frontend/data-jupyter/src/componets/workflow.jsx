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
        console.log("this is step one display");
        console.log(stepOneDisplay)
        
    }, [stepOneDisplay])


    const inputNote = {
        1: "Step 1: please provide the name and insitution of the faculty member you interested in, then the result of google search will be presented."
    }


    return(
        <div className = "WorkFlowWrapper">
            <div className = "displayArea">
                <div className = "result">
                   <h1 style= {{paddingTop : "5px", paddingBottom: "5px"}}>Result</h1>
                </div>
                <Steps 
                changeStep = {
                    s => setStep(s) 
                }
                />
                <div>
                    {step === 1 ? 
                    <StepOneDisplay allUrls = {Object.values(stepOneDisplay)}/>
                    : step === 2 ? <h1>2step</h1> 
                    : <h1>step3</h1> }
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
                    <StepOneInput name = {stepOneInputPair.name} institution = {stepOneInputPair.institution} changInputOnePair = {s => setStepOneInputPair(s)} displayUrls = { c => setStepOneDisplay(c)} previosDisplay = {stepOneDisplay}/> 
                    : step === 2 ? <h1>2step</h1> 
                    : <h1>step3</h1> }
                </div>


            </div>
        </div>
    )
}

