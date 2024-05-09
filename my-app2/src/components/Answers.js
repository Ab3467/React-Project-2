import React,{useRef} from 'react'

export default function Answers({answers,AnswerState,selectedAnswers}) {
    const shuffledAnswers = useRef();
    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
        }
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
