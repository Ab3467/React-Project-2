import React, { useState } from 'react';
import QUESTIONS from './Questions.js';



export default function Quiz() {
const [UserAnswers,setUserAnswers] = useState([]);

const activeQuestionIndex = UserAnswers.length;

function HandleSelectAnswer(selectAnswer){
    setUserAnswers((prevAnswers=>{
        return [...prevAnswers,selectAnswer];
    }))
}
 


return (
    <div className="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
            {QUESTIONS[activeQuestionIndex].answers.map((answer=>(
         <li key={answer} className='answer'>
        <button onClick={HandleSelectAnswer}>{answer}</button>
        </li>
            )))}
         
        </ul>
      </div>
      </div>
    );
  } 
