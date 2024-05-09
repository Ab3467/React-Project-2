import React from 'react'
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'

export default function Question({questionText,answers,onSelectAnswer,selectedAnswer,AnswerState,onSkipAnswer}) {
  return (
    <div id="question">
    <QuestionTimer timeout={10000} onTimeOut={onSelectAnswer} />
    <h2>{questionText}</h2>
    <Answers 
    answers={answers}
    selectedAnswers={selectedAnswer}
    AnswerState={AnswerState} 
    onSelect={onSelectAnswer}
    
    />
    
  </div>
  )
}
