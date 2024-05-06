import React,{useState} from 'react'

export default function Quiz() {
const {UserAnswers,setAnswers} = useState(0) 

const ActiveQuestionIndex = UserAnswers.length;
  return (
    <div id="question">
    <h1>{QUESTIONS[ActiveQuestionIndex].text}</h1>
    <ul id="answers">
        {}
    </ul>
    </div>
  )
}
