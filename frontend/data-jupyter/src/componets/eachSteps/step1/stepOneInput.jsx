import {React, useEffect, useState} from "react"
import {TextField, Button} from '@material-ui/core';
import "./stepOneInput.css"



export default function StepOneInput(props) {
    const [name, setName] = useState(props.name)
    const [institution, setInstitution] = useState(props.institution)
    const [isSubmitted, setIsSubmitted] = useState(false)




    useEffect(
        ()=>{props.changInputOnePair({name, institution}); console.log("submitted, sent steponeinput state to workflow",{name, institution})}
    , [isSubmitted])




    const handleStepOneSubmit = () =>{
        setIsSubmitted(true)
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