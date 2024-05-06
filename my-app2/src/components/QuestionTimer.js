import React,{useState} from 'react'

export default function QuestionTimer({timeout,onTimeOut}) {

    const [remainingTime,setremainingTime] = useState(timeout);

    setTimeout(onTimeOut,timeout);
  return (
    <progress id="question-time"/>
  )
}
