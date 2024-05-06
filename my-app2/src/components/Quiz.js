import React,{useState} from 'react'
import QUESTIONS from "./Questions.js"

export default function Quiz() {
const {UserAnswers,setAnswers} = useState(0) 

const ActiveQuestionIndex = UserAnswers.length;
  return (
    <div id="question">
    <h1>{QUESTIONS[ActiveQuestionIndex].text}</h1>
    <ul id="answers">
        {QUESTIONS[ActiveQuestionIndex].answers.map(answer=>{
        <li key={answer} className='answer'>
            <button>{answer}</button>
        </li>
        })}
    </ul>
    </div>
  )
}
