// Quiz.js
import React, { useCallback, useState } from 'react';
import QUESTIONS from './Questions.js';
import quizComplt from "../assets/quiz-complete.png"
import Question from './Question.js';



export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  

  const activeQuestionIndex = userAnswers.length;
  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectAnswer) {
     setUserAnswers((prevAnswers) => {
     return [...prevAnswers, selectAnswer];
     });
  }, 
  []);
  
  
  
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
      index={activeQuestionIndex}
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



