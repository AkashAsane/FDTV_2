import React, { useEffect, useState ,useRef} from 'react';
import './App.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const startStopwatch = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div >
      <h1 >Stopwatch</h1>
      <div >{formatTime(time)}</div>
      <div >
        {isRunning ? (
          <button onClick={startStopwatch}>
            Stop
          </button>
        ) : (
          <button onClick={startStopwatch}>
            Start
          </button>
        )}
        <button  onClick={resetStopwatch}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
