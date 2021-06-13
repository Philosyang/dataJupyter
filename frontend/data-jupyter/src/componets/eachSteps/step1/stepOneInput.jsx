import {React, useEffect, useState} from "react"
import {TextField, Button} from '@material-ui/core';
import "./stepOneInput.css"



export default function StepOneInput(props) {
    const [name, setName] = useState(props.name)
    const [institution, setInstitution] = useState(props.institution)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [url, setUrl] = useState("http://127.0.0.1:5000/aba");



    useEffect(
        ()=>{props.changInputOnePair({name, institution}); console.log("submitted, sent steponeinput state to workflow",{name, institution})}
    , [isSubmitted])



    const handleStepOneSubmit = () =>{

        setIsSubmitted(true)
        var data = {name: {name}, institution: {institution}}
        console.log(data)
        fetch("/aba", {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response)=>{
            var res = response.json()
            console.log(res)
        })
    }

    return(
        <div className = "StepOneInputWrapper">
            <div className = "inputBoxesWrapper">
                <TextField id="filled-basic" label="Name" variant="filled" onChange = {(e) =>{setName(e.target.value)}}/>
                <TextField id="filled-basic" label="Instituion" variant="filled" onChange = {(e) =>{setInstitution(e.target.value)}}/>
            </div>
            <div className = "submitButton">
                <Button color = "primary" variant="contained" onClick={handleStepOneSubmit}>Submit</Button>
            </div>
            <h1>
                {name},{institution}
            </h1>

        </div>
    )
}