import {React, useEffect, useState} from "react"
import {TextField, Button} from '@material-ui/core';
import "./stepOneInput.css"



export default function StepOneInput(props) {
    const [name, setName] = useState("")
    const [institution, setInstitution] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)


    useEffect(()=>{
        setInstitution(props.insti);
        setName(props.name)
    },[])

    useEffect(
        ()=>{props.changInputOnePair({name, institution}); console.log({name, institution})}
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