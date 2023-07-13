import React from "react";
import "./FunClassComp.css"


const FunctionalComp = () =>{
    const myStyle = {
        borderRadius:"30px",
        backgroundColor: "cyan",
        width: "37%",
        padding: "30px 30px",
        fontSize: "1.2vw",
        border: "2px solid black",
        textAlign: "center",
        paddingBottom: "70px"     
    }
    return(
        <div style={myStyle}>
            <h1>This is created using Functional component</h1>
            <p id="para">This is Done by External CSS</p>
            <p style={{color: "blue", marginTop: "15px"}}>This is Done by Inline CSS</p>
        </div>
    )
}

export default FunctionalComp