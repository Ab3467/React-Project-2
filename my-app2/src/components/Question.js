import React,{useState} from 'react'
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'
import QUESTIONS from "./Questions.js"

export default function Question({questionText,answers,onSelectAnswer,selectedAnswer,onSkipAnswer}) {
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
            }, 1000);
    }

    let AnswerState = '';
     if(answer.selectedAnswer)

  return (
    <div id="question">
    <QuestionTimer timeout={10000} onTimeOut={onSelectAnswer} />
    <h2>{questionText}</h2>
    <Answers 
    answers={answers}
    selectedAnswers={selectedAnswer}
    AnswerState={AnswerState} 
    onSelect={HandleSelectAnswer}
    
    />
    
  </div>
  )
}
