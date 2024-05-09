import React from 'react'
import quizComplt from "../assets/quiz-complete.png"

export default function Summary() {
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
            <li>
                <h3>2</h3>
                <p className='question'>question text</p>
                <p className='user-answer'>user's answer</p>
            </li>
        </ol>
   </div>
  )
}
