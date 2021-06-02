import React, {useState} from "react";
import Results from "./components/Morse";

function App() {
  const [userInput, setUserInput] = useState("");
  function changeHandel(e){
    setUserInput(e.target.value);
  }
  
     
  return <div className="App">
    <h1>Morse Convertor</h1>
    <div className="boxes">
    <input type="text" placeholder="Enter your message" value={userInput} onChange={changeHandel}></input>
    <div className="box">
      <h3>your morsecode is :</h3>
      <div className="results" >
        <Results userInput={userInput}/>
      </div>
      </div>
    </div>
  </div>;
}

export default App;
