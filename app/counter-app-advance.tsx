"use client"

import React, { useState } from 'react'
import { start } from 'repl';

export default function CounterAppAdvance() {

  const[counter, setCounter] = useState(0);

  const decrement = (start=1) =>{
    setCounter(counter-start)
  }

  const increment = (start=1) =>{
    setCounter(counter + start)
  }



  return (
    <>
    <button onClick={()=> {increment(1)}}>Increment</button>
    <button onClick={()=> {increment(2)}}>Increment by 2</button>
    <button onClick={()=> {increment(3)}}>Increment by 3</button>
    {counter}
      <button onClick={()=>{decrement(1)}}>Decrement</button>
    <button onClick={()=>{decrement(2)}}>Decrement by 2</button>
    <button onClick={()=>{decrement(3)}}>Decrement by 3</button>  
    </>
  )
  
}
