import React from 'react';
import quizComplt from "../assets/quiz-complete.png";
import QUESTIONS from "./Questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

  const totalQuestions = userAnswers.length;
  const skippedAnswersPercentage = Math.round((skippedAnswers.length / totalQuestions) * 100);
  const correctAnswersPercentage = Math.round((correctAnswers.length / totalQuestions) * 100);
  const wrongAnswersPercentage = 100 - skippedAnswersPercentage - correctAnswersPercentage;

  return (
    <div id="summary">
      <img src={quizComplt} alt="Quiz complete" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className='number'>{skippedAnswersPercentage}%</span>
          <span className='text'>skipped</span>
        </p>
        <p>
          <span className='number'>{correctAnswersPercentage}%</span>
          <span className='text'>answered correctly</span>
        </p>
        <p>
          <span className='number'>{wrongAnswersPercentage}%</span>
          <span className='text'>answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = 'user-answer';

          if (answer === null) {
            cssClass += ' skipped';
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className='question'>{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? 'skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
