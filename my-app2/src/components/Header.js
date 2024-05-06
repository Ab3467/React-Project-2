import React from 'react'
import Image from "../assets/Quiz.jpg"  


export default function Header() {
  return (
    <header>
        <img src={Image} alt='quiz-logo'/>
        <h1>React Quiz</h1>
    </header>
  )
}
