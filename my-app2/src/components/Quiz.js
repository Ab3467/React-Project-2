// Quiz.js
import React, { useState } from 'react';
import QUESTIONS from './Questions.js';
import quizComplt from "../assets/quiz-complete.png"
import QuestionTimer from './QuestionTimer.js';

export default function Quiz() {
  const [AnswerState,setAnswerState] = useState('')
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = (selectAnswer) => {
    setAnswerState('Answered')
    setUserAnswers((prevAnswers) => [...prevAnswers, selectAnswer]);
  };
   

  setTimeout(() => {
    if(selectAnswer=== QUESTIONS[activeQuestionIndex].answers[0]){
        setAnswerState('Correct')
    }
  }, 1000);
  
  
  const handleSkipAnswer = () => {
    handleSelectAnswer(null);
  };

  if (isQuizComplete) {
    return (
      <div id="summary">
        <img src={quizComplt} alt="Quiz complete" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeOut={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className='answer'>
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
