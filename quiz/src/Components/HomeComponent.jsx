import React, { useState } from 'react'
import Quiz from './Quiz';
import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {
  // const [display,setDisplay] = useState(false);
  // const [quit, setQuit] =  useState(false);

  const navi=useNavigate();
  

  let startGame=()=>{
    navi("/quiz")
  }

  return (
    <div>
      
      <div><h1>Quiz App</h1>
        <button onClick={startGame}>Play</button></div>
        
    </div>
  )
}

export default HomeComponent