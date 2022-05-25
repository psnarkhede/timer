import React, { useEffect, useState } from 'react'
import Styles from "./Time.module.css"

let start = 0;

let stop = 0;

const Timer = () => {

    const [time, setTime] = useState("00");

    useEffect(() => {
        const id = setInterval(() => {
            if(time === stop){
                setTime("00")
                clearInterval(id);
                alert("Time's Up!");
                
            }else if(time !== "00"){
                setTime((time) => time + 1);
            }
        },1000);

        {/* Clean Up function */}
        return () => {
            clearInterval(id);
        }
    },[time]);


    const run = () => {
        setTime(start);
    }

  return (
    <div className={Styles.box} >
        <h1>Timer App</h1>

        <input className={Styles.input1} onChange={(e) => start = Number(e.target.value)} placeholder='Start'/>

        <input className={Styles.input1} onChange={(e) => stop = Number(e.target.value)} placeholder='Stop' />
        <br/>
        <h1>{time}</h1>
        <button className={Styles.btn} onClick={run} >Start</button>


        
    </div>
  )
}

export default Timer