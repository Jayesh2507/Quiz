import React, { useEffect, useState } from 'react'

export default function Timer({setStop,questionNumber,wrongAnswer}) {
    let [timer,setTimer] = useState(30);

    useEffect(()=>{
        if(timer===0){
            return setStop(true),wrongAnswer();
        }
        const interval = setInterval(() => {
            setTimer(timer--);
        },1000);
        return ()=> clearInterval(interval);
    },[setStop,timer])

    useEffect(()=>{
        setTimer(30);
    },[questionNumber])

  return timer;
}
