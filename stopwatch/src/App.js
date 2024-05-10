import React, { useEffect, useState } from 'react';
import './App.css';

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalid;
        if (isRunning) {
            intervalid = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        else{
           clearInterval(intervalid); 
        
        }

        return () => clearInterval(intervalid);
    }, [isRunning]);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60)
        const seconds = timeInSeconds % 60
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    };

    const handleStartStop = () => {
      setIsRunning( prevIsRunning => !prevIsRunning)
    }


    const handleReset = () => {
        setTime(0)
        setIsRunning(false)
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <div>Time: {formatTime(time)}</div>
            <div>
                <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;
