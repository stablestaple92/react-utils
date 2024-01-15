import {useState} from 'react';
import useInterval from './useInterval';

const useTimer = (initialMinutes = 0, initialSeconds = 0) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60 + initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(initialMinutes * 60 + initialSeconds);
  };

  useInterval(
    () => {
      if (timeLeft > 0) {
        setTimeLeft(prevTime => prevTime - 1);
      } else {
        pauseTimer();
      }
    },
    isRunning ? 1000 : null,
  );

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  const displayTime = `${formatTime(Math.floor(timeLeft / 60))}:${formatTime(timeLeft % 60)}`;

  return {timeLeft, isRunning, startTimer, pauseTimer, resetTimer, displayTime};
};

export default useTimer;
