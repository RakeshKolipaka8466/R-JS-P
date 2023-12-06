import './App.css'
import { useState } from "react";

const Counter=()=>{
    const [counter,setCounter]=useState(0);
    const restart=()=>{
        setCounter(0);
    }
    const increase=()=>{
        setCounter(counter+1);
    }
    const decrease=()=>{
        if(0<counter){
        setCounter(counter-1);
        }
     }
    return(
        <div className='counter'>
            <h2>Hey Iam Counter</h2>
            <button onClick={restart}>Restart</button>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <h2>{counter}</h2>
        </div>
    )
}
export default Counter;