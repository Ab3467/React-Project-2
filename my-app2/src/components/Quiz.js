// Quiz.js
import React, { useCallback, useState } from 'react';
import QUESTIONS from './Questions.js';
import quizComplt from "../assets/quiz-complete.png"
import Question from './Question.js';



export default function Quiz() {
  const [AnswerState,setAnswerState] = useState('')
  const [userAnswers, setUserAnswers] = useState([]);
  

  const activeQuestionIndex = AnswerState === '' ? userAnswers.length : userAnswers.length - 1;
  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectAnswer) {
    setAnswerState('Answered');
    setUserAnswers((prevAnswers) => [...prevAnswers, selectAnswer]);
    
    if (selectAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
      setTimeout(() => {
        setAnswerState('Correct');
      }, 1000);
    } else {
      setTimeout(() => {
        setAnswerState('Wrong');
      }, 1000);
    }
    setTimeout(() => {
        setAnswerState('')
    }, 2000);
  }, [activeQuestionIndex]);
  
  
  
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

  

  return (
    <div id="quiz">
      <Question 
      key={activeQuestionIndex}
      // questionText={QUESTIONS[activeQuestionIndex].text }
      // answers={QUESTIONS[activeQuestionIndex].answers}
      // selectedAnswer={userAnswers[userAnswers.length -1]}
      // AnswerState={AnswerState}
      onSelectAnswer={handleSelectAnswer}
      onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}



