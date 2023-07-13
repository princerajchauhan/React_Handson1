import React, { Component } from "react";
import "./FunClassComp.css"


class ClassComponent extends Component {
    myStyle = {
        borderRadius: "30px",
        backgroundColor: "#c67fc3",
        width: "37%",
        padding: "30px 10px",
        fontSize: "1.2vw",
        border: "2px solid black",
        textAlign: "center",
        paddingBottom: "70px",
        position: "absolute",
        right: "7%"
    }
    render() {
        return (
            <>
                <div style={this.myStyle}>
                    <h1>This is my First Class Based Component</h1>
                    <p id="para">This is Done by External CSS</p>
                    <p style={{ color: "blue", marginTop: "15px"}}>This is Done by Inline CSS</p>
                </div>
            </>
        )
    }
}

export default ClassComponent