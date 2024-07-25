import { useEffect, useState } from 'react';

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  //   console.log(remainingTime);
  console.log(timer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(prevTime - 20, 0));
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
