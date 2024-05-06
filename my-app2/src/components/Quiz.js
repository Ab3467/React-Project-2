import React, { useState } from 'react';
import QUESTIONS from './Questions.js';

export default function Quiz() {
const [UserAnswers,setUserAnswers] = useState([]);

const activeQuestionIndex = UserAnswers.length;

function HandleSelectAnswer(){
    
}
 

  // Check if QUESTIONS[ActiveQuestionIndex] exists before rendering
 
    return (
      <div id="question">
        <h2></h2>
        <ul id="answers">
         <li>
              <button></button>
            </li>
        </ul>
      </div>
    );
  } 
