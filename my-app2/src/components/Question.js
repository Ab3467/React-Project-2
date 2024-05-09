import React,{useState} from 'react'
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'
import QUESTIONS from "./Questions.js"

export default function Question({index,onSelectAnswer,onSkipAnswer}) {
    const [answer,setAnswer] = useState({
        selectedAnswer:'',
        isCorrect: null,
    })

    function HandleSelectAnswer(answer){
      setAnswer(
        {
            selectedAnswer: answer,
            isCorrect:null,
        })
        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer,
            })
        setTimeout(() => {
                onSelectAnswer(answer);
             }, 2000);
        }, 1000);
    }

    let AnswerState = '';
     if(answer.selectedAnswer && answer.isCorrect !== null){
        AnswerState = answer.isCorrect ? 'correct' : 'wrong'
     }

  return (
    <div id="question">
    <QuestionTimer timeout={10000} onTimeOut={onSkipAnswer} />
    <h2>{QUESTIONS[index].text}</h2>
    <Answers 
    answers={QUESTIONS[index].answers}
    selectedAnswers={answer.selectedAnswer}
    AnswerState={AnswerState} 
    onSelect={HandleSelectAnswer}
    
    />
    
  </div>
  )
}
