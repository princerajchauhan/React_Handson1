import React, {useState} from 'react';
import './App.css';
import FunctionalComp from './Components/FunctionalComp';
import ClassComponent from './Components/ClassComponent';

function App() {
  const myStyle = {
    backgroundColor: "cyan",
    borderRadius: "50px",
    padding: "30px",
    cursor: "pointer",
    marginTop: "30px"
  }

  const btnStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10vw",
    marginTop: "40px"
  }
  const headStyle = {
    textAlign: "center",
    fontSize: "3vw",
    textShadow: "3px 3px 5px cyan"
  }

  const [isFun, setIsFun] = useState(false)
  const [isClass, setIsClass] = useState(false)

  const funcBtnClick = () => {
    setIsFun(!isFun)
    console.log("Function Button clicked",isFun)
  }

  const classBtnClick = () => {
    setIsClass(!isClass)
    console.log("Class Button clicked",isClass)
  }
  return (
    <>
      <h1 style={headStyle}>Styling using Functional and Class Components</h1>

      <div style={btnStyle}>
        <button style={myStyle} onClick={funcBtnClick}>To See Styling in Functional Component</button>
        <button style={myStyle} onClick={classBtnClick}>To See Styling in Class Component</button>
      </div>
      
      <div style={{display:"flex", justifyContent: "space-evenly", marginTop:"100px"}}>
        
        {/* <div style={{display: isFun ?"block":"none"}}>
          <FunctionalComp />
        </div> */}
        {/* {isFun ?<FunctionalComp /> : "" } */}
        {isFun && <FunctionalComp />}
        
        {/* <div style={{display: isClass ?"block":"none"}}>
          <ClassComponent />
        </div> */}
        {/* {isClass ?<ClassComponent /> : "" } */}
        {isClass && <ClassComponent />}

      </div>
    </>
  );
}

export default App;
