import React from "react";
import { useNavigate } from "react-router-dom";

const Result = () => {
    const navi=useNavigate();

    let playAgain=()=>{
navi("/quiz")
    }

    let Homepage=()=>{
        navi("/")
    }

  return (
    <div>
      <h1>Result</h1>

      <div className="result">
        <h4>You need practice</h4>
        <h2>Your score is 20%</h2>
        <p>Total number os questions</p>
        <p>Number of attempted questions</p>
        <p>Number correct answer</p>
        <p>Number of wrong answer</p>
      </div>

      <div>
        <button onClick={playAgain}>Play again</button>
        <button onClick={Homepage}>Back to home</button>
      </div>
    </div>
  );
};

export default Result;
