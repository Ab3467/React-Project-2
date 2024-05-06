import React, { useState } from 'react';
import QUESTIONS from './Questions.js';
import quizComplt from "../assets/quiz-complete.png"



export default function Quiz() {
const [UserAnswers,setUserAnswers] = useState([]);

const activeQuestionIndex = UserAnswers.length;



const IsQuizComplt = activeQuestionIndex === QUESTIONS.length;

function HandleSelectAnswer(selectAnswer){
    setUserAnswers((prevAnswers=>{
        return [...prevAnswers,selectAnswer];
    }))
}
 

if(IsQuizComplt){
    return <div id="summary">
        <img src={quizComplt} alt="Quiz complete" />
        <h2>Quiz Completed!</h2>
    </div>
}

const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
shuffledAnswers.sort(()=> Math.random()- 0.5)

return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
            {shuffledAnswers.map((answer=>(
         <li key={answer} className='answer'>
        <button onClick={HandleSelectAnswer}>{answer}</button>
        </li>
            )))}
         
        </ul>
      </div>
      </div>
    );
  } 
