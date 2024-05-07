import React, { useEffect, useState } from 'react';

export default function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        if (prevRemainingTime <= 0) {
          clearInterval(timer);
          onTimeOut(); // Call the callback function when timeout occurs
          return 0;
        }
        return prevRemainingTime - 100;
      });
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [timeout, onTimeOut]);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
