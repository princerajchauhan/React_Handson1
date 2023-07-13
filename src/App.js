import React, { Component } from 'react';
import './App.css';
import FunctionalComp from './Components/FunctionalComp';
import ClassComponent from './Components/ClassComponent';

class App extends Component {

  state = {
    isFun: false,
    isClass: false
  }

  myStyle = {
    backgroundColor: "cyan",
    borderRadius: "50px",
    padding: "30px",
    cursor: "pointer",
    marginTop: "30px"
  }

  btnStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10vw",
    marginTop: "40px"
  }
  headStyle = {
    textAlign: "center",
    fontSize: "3vw",
    textShadow: "3px 3px 5px cyan"
  }

  funcBtnClick = () => {
    this.setState({isFun: !this.state.isFun})
  }

  classBtnClick = () => {
    this.setState({isClass: !this.state.isClass})
  }
  render() {
    return (
      <>
        <h1 style={this.headStyle}>Styling using Functional and Class Components</h1>

        <div style={this.btnStyle}>
          <button style={this.myStyle} onClick={this.funcBtnClick}>To See Styling in Functional Component</button>
          <button style={this.myStyle} onClick={this.classBtnClick}>To See Styling in Class Component</button>
        </div>

        <div style={{marginTop: "100px" }}>

          {/* <div style={{display: isFun ?"block":"none"}}>
          <FunctionalComp />
        </div> */}
          {/* {isFun ?<FunctionalComp /> : "" } */}
          {this.state.isFun && <FunctionalComp />}

          {/* <div style={{display: isClass ?"block":"none"}}>
          <ClassComponent />
        </div> */}
          {/* {isClass ?<ClassComponent /> : "" } */}
          {this.state.isClass && <ClassComponent />}

        </div>
      </>
    );
  }
}

export default App;
