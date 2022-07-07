import './App.css';
import React from 'react';

function App() {
  var num 
  const [randomnum, setrandomnum] = React.useState(0)
  const [updown, setupdown] = React.useState("")
  function newgame(){
    setrandomnum(Math.floor(Math.random()*100))
  }
  function change() {
    var num = Number(prompt())
    console.log(num, randomnum)
    if(num < randomnum){
      setupdown("up")
    }
    else if(num > randomnum){
      setupdown("down")
    }
    else if(num === randomnum){
      setupdown("correct")
    }
  }
  return (
    <div className="App">
      <h1>{updown}</h1>
      <button onClick={change}>input</button>
      <button onClick={newgame}>new game</button>
    </div>
  );
}

export default App;
