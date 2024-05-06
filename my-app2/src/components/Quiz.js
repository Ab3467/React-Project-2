import React,{useState} from 'react'
import QUESTIONS from "./Questions.js"

export default function Quiz() {
const {UserAnswers,setUserAnswers} = useState([]) 


function HandleSelectAnswer(selectedAnswer){
 setUserAnswers((prevUserAns=>{
    return [...prevUserAns,selectedAnswer]
 }))
}

const ActiveQuestionIndex = UserAnswers.length;
  return (
    <div id="question">
    <h1>{QUESTIONS[ActiveQuestionIndex].text}</h1>
    <ul id="answers">
        {QUESTIONS[ActiveQuestionIndex].answers.map(answer=>{
        <li key={answer} className='answer'>
            <button onClick={HandleSelectAnswer}>{answer}</button>
        </li>
        })}
    </ul>
    </div>
  )
}
