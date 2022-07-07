import './App.css';
import React from 'react';

function App() {
  var num 
  const [randomnum, setrandomnum] = React.useState(Math.floor(Math.random()*100))
  const [updown, setupdown] = React.useState("")
  const [trynum, settrynum] = React.useState(0)
  const [trylog, settrylog] = React.useState("")
  function newgame(){
    setrandomnum(Math.floor(Math.random()*100))
    settrynum(0)
    settrylog("")
  }
  function change() {
    var num = Number(prompt())
    if(num < randomnum){
      setupdown("up")
    }
    else if(num > randomnum){
      setupdown("down")
    }
    else if(num === randomnum){
      setupdown("correct")
    }
    settrynum(trynum+1)
    settrylog(trylog + " " + String(num))
  }
  return (
    <div className="App">
      <h1>updown(0~100)</h1>
      <h2>{updown}</h2>
      <h3>your try : {trynum}</h3>
      <button onClick={change}>input</button>
      <button onClick={newgame}>new game</button>
      <p>try log : {trylog}</p>
    </div>
  );
}

export default App;
