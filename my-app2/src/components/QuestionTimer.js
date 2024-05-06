import React,{useEffect, useState} from 'react'

export default function QuestionTimer({timeout,onTimeOut}) {

    const [remainingTime,setremainingTime] = useState(timeout);

    useEffect(() => {
        setTimeout(onTimeOut,timeout);
    }, [])
    
    useEffect(()=>{
        setInterval(() => {
            setremainingTime(prevRemainingTime=> prevRemainingTime-100);
        }, 100);
    },[])
    
  return (
    <progress id="question-time"/>
  )
}
