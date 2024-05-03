import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import data from "../data/quizQuestion.json";

const Quiz = () => {
  const [index, setIndex] = useState(0);

  console.log(data)

  const navi = useNavigate();
  const handleQuit = () => {
    alert("Are you sure  want to quit");
    navi("/quit");
  };

  const handlePrev = () => {
    if (index <= 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index -1);
    }
  };

  const handleNext=()=>{
    if(index>=data.length-1){
      setIndex(0);
    }else{
      setIndex(index+1);
    }
  }



  return (
 
    <DIV>
       {/* {console.log(data[index])} */}
      <h1>Question no:{index+1}</h1>

      <p>{data[index].question}</p>

      <div className="answerBox">
        
        <div className="answer 1">{data[index].optionA}</div>
        <div className="answer 2">{data[index].optionB}</div>
        <div className="answer 3">{data[index].optionC}</div>
        <div className="answer 4">{data[index].optionD}</div>
      </div>

      <div>
        <button className="button blue" onClick={handlePrev}>
          previous
        </button>
        <button className="button green" onClick={handleNext}>
          Next
        </button>
        <button className="button red" onClick={handleQuit}>
          Quit
        </button>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  .answerBox {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5%;

    .answer {
      width: 100%;
      height: 20px;
      border: 1px solid green;
    }
  }
`;

export default Quiz;
