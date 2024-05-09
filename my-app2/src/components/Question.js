import React from 'react'
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'
import QUESTIONS from "./Questions.js"

export default function Question({questionText,answers,onSelectAnswer}) {
  return (
    <div id="question">
    <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeOut={handleSkipAnswer} />
    <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
    <Answers 
    key={activeQuestionIndex}
    answers={QUESTIONS[activeQuestionIndex].answers}
    selectedAnswers={userAnswers[userAnswers.length -1]}
    AnswerState={AnswerState} 
    onSelect={handleSelectAnswer}
    />
    
  </div>
  )
}
