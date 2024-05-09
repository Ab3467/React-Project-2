import React,{useState} from 'react'
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'
import QUESTIONS from "./Questions.js"

export default function Question({key,onSelectAnswer,onSkipAnswer}) {
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
                isCorrect: QUESTIONS[key].answers[0] === answer,
            })
        setTimeout(() => {
                onSelectAnswer(answer);
             }, 2000);
        }, 1000);
    }

    let AnswerState = '';
     if(answer.selectedAnswer)

  return (
    <div id="question">
    <QuestionTimer timeout={10000} onTimeOut={onSkipAnswer} />
    <h2>{QUESTIONS[key].text}</h2>
    <Answers 
    answers={QUESTIONS[key].answers}
    selectedAnswers={answer.selectedAnswer}
    AnswerState={AnswerState} 
    onSelect={HandleSelectAnswer}
    
    />
    
  </div>
  )
}
