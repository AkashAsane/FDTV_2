import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
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

     
      const  handlestart=()=>{
        setisrunning(true)
      }

      const handlestop=()=>{
        setisrunning(false);
      }

      const handlereset=()=>{
        setTime(0);
        setisrunning(false)
      }
      
      const createTime=(timesec)=>{
         const min= Math.floor(timesec/60);
         const sec= timesec%60;
         return `${min}:${sec<10 ? "0" : ""} ${sec}`;
      }

    return(
      <>
         <h1>Stopwatch</h1>
         <h3>Time: {createTime(time)}</h3>
          { !isrunning ?(
            <button onClick={handlestart}>Start</button>
          ):(
            <button onClick={handlestop}>Stop</button>
          )}
          <button onClick={handlereset}>reset</button>
          
      </>
    )
}

export default Stopwatch;
