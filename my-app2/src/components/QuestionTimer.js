import React,{useState} from 'react'

export default function QuestionTimer({timeout,onTimeOut}) {
    setTimeout(onTimeOut,timeout);
  return (
    <progress id="question-time"/>
  )
}
