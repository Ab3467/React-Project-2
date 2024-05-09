import React,{useRef} from 'react'

export default function Answers({answers,AnswerState,selectedAnswers,onSelect}) {
    const shuffledAnswers = useRef();
    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
        }
  return (
    <ul id="answers">
          {shuffledAnswers.current.map((answer) => {
            let isSelected = selectedAnswers === answer;
            let cssClass ='';

            if (AnswerState === 'Answered' && isSelected) {
                cssClass = 'selected';
              }
              
              if ((AnswerState === 'Correct' || AnswerState === 'Wrong') && isSelected) {
                cssClass = AnswerState.toLowerCase(); // Convert to lowercase for consistency
              }
              

           return <li key={answer} className='answer'>
              <button onClick={() => onSelect(answer)} className={cssClass}>{answer}</button>
            </li>
          } )}
        </ul>
  )
}
