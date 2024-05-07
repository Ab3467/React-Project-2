import React,{useEffect, useState} from 'react'

export default function QuestionTimer({timeout,onTimeOut}) {

    const [remainingTime,setremainingTime] = useState(timeout);

    useEffect(() => {
        setTimeout(onTimeOut,timeout);
    }, [timeout,onTimeOut])
    
    useEffect(()=>{
        setInterval(() => {
            const interval = setremainingTime(prevRemainingTime=> prevRemainingTime-100);
        }, 100);
        return ()=>{
            clearInterval(interval);
        };
    },[])
    
  return 
    <progress id="question-time" max={timeout} value={remainingTime}/>
  }
