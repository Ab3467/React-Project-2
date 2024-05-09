// Quiz.js
import React, { useCallback, useState } from 'react';
import QUESTIONS from './Questions.js';
import quizComplt from "../assets/quiz-complete.png"
import QuestionTimer from './QuestionTimer.js';

export default function Quiz() {
  const shuffledAnswers =;
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

  if(!shuffledAnswers.current){
  shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeOut={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
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
      </div>
    </div>
  );
}



/// yeah its just for contribution....