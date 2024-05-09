import React from 'react'

export default function Answers() {
  return (
    <ul id="answers">
          {shuffledAnswers.current.map((answer) => {
            let isSelected = userAnswers[userAnswers.length -1] === answer;
            let cssClass ='';

            if (AnswerState === 'Answered' && isSelected) {
                cssClass = 'selected';
              }
              
              if ((AnswerState === 'Correct' || AnswerState === 'Wrong') && isSelected) {
                cssClass = AnswerState.toLowerCase(); // Convert to lowercase for consistency
              }
              

           return <li key={answer} className='answer'>
              <button onClick={() => handleSelectAnswer(answer)} className={cssClass}>{answer}</button>
            </li>
          } )}
        </ul>
  )
}
