import React,{useState} from 'react'

export default function Quiz() {
const {Answers,setAnswers} = useState(0) 

const ActiveQuestionIndex = Answers.length;
  return (
    <div id="question">
    <p>Currently Active Questions</p>
    <ul id="answers">
        {}
    </ul>
    </div>
  )
}
