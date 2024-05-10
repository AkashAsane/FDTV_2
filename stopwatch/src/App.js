import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';

function Stopwatch() {

    const[time,setTime]=useState(0);
    const[isrunning,setisrunning]=useState(false);

    useEffect(()=>{
          let interval
          if(isrunning)
          {
             interval=setInterval(()=>{
              setTime(prev=>prev+1)
            },1000)
          }

          return ()=>clearInterval(interval)
    },[isrunning]);

    const timeformat=(timesec)=>{
      const minutes= Math.floor(timesec/60);
      const seconds= timesec%60;
      return `${minutes}:${seconds<10 ? "0" : " "} ${seconds}`;
   }
     
      const  handlestartstop=()=>{
        setisrunning(!isrunning)
      }

      const handlereset=()=>{
        setTime(0);
        setisrunning(false)
      }
      
     

    return(
         <div>
         <h1>Stopwatch</h1>
         <div>Time: {timeformat(time)}</div>
          <div>
          <button onClick={handlestartstop}>{isrunning ? "Stop" : "Start"}</button>
          <button onClick={handlereset}>Reset</button>
          </div>
        </div>
      
    )
}

export default Stopwatch;
