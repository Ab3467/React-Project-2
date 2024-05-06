import React from 'react'
import Image from "../assets/"  


export default function Header() {
  return (
    <header>
        <img src={Image}/>
        <h1>React Quiz</h1>
    </header>
  )
}
