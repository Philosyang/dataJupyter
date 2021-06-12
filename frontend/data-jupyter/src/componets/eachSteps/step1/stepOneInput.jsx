import {React, useEffect, useState} from "react"
import {TextField, Button} from '@material-ui/core';
import "./stepOneInput.css"



export default function StepOneInput() {
    const [name, setName] = useState("")
    const [institution, setInstitution] = useState("")



    return(
        <div className = "StepOneInputWrapper">
            <div className = "inputBoxesWrapper">
                <TextField id="filled-basic" label="Name" variant="filled" onChange = {(e) =>{setName(e.target.value)}}/>
                <TextField id="filled-basic" label="Instituion" variant="filled" onChange = {(e) =>{setInstitution(e.target.value)}}/>
            </div>
            <div className = "submitButton">
                <Button color = "primary" variant="contained">Submit</Button>
            </div>
            <h1>
                {name},{institution}
            </h1>

        </div>
    )
}