import { useEffect, useState } from 'react';

export default function ProgressBar({ timer, userAnswers }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  //   console.log(remainingTime);
  // console.log(timer);

  useEffect(() => {
    // console.log('Effect mounted');
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(prevTime - 17, 0));
    }, 10);

    return () => {
      setRemainingTime(timer);
      clearInterval(intervalId);
    };
  }, [userAnswers]);

  return (
    <progress
      className="w-2/4 rounded-full my-8"
      value={remainingTime}
      max={timer}
    />
  );
}
