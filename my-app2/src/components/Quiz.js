import React, { useState,useCallback } from 'react';
import QUESTIONS from './Questions.js';
import quizComplt from "../assets/quiz-complete.png"
import QuestionTimer from './QuestionTimer.js';



export default function Quiz() {
const [UserAnswers,setUserAnswers] = useState([]);

const activeQuestionIndex = UserAnswers.length;



const IsQuizComplt = activeQuestionIndex === QUESTIONS.length;

const HandleSelectAnswer= useCallback(function HandleSelectAnswer(selectAnswer){
    setUserAnswers((prevAnswers=>{
        return [...prevAnswers,selectAnswer];
    }))
});
 

const HandleSkipAnswer = useCallback(()=>HandleSelectAnswer(null),[HandleSelectAnswer]);


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
        <QuestionTimer timeout={20000} onTimeOut={()=> HandleSelectAnswer(null)}/>
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
