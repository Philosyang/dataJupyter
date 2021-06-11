import {React, useEffect, useState} from "react"
import "./naviBar.css"

export default function NaviBar() {
    return(
        <div className = "NaviBarWrapper">
            <h3 style={{position: "absolute", margin: "10px", paddingLeft: "20px"}}>
                data-jupyter
            </h3>
        </div>
    )
}