import React from 'react'
import quizComplt from "../assets/quiz-complete.png"
import QUESTIONS from "./Questions.js"
import Answers from './Answers.js'

export default function Summary({userAnswers}) {
  return (
   <div id="summary">
     <img src={quizComplt} alt="Quiz complete" />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
            <p>
                <span className='number'>10%</span>
                <span className='text'>skipped</span>
            </p>
            <p>
                <span className='number'>10%</span>
                <span className='text'>answered correctly</span>
            </p>
            <p>
                <span className='number'>10%</span>
                <span className='text'>answered Incorrectly</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer,index) =>{

                let cssClass = 'user-answer'
                return(
                    <li key={answer}>
                    <h3>{index+1}</h3>
                    <p className='question'>{QUESTIONS[index].text}</p>
                    <p className='user-answer'>{answer ?? 'skipped'}</p>
                </li>
                )
            })}
           
        </ol>
   </div>
  )
}
