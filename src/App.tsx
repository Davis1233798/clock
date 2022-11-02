import React from 'react';
import './App.css';
import Clock from './components/Clock';
import { useState, useEffect } from "react";
//import ReactDOM from "react-dom/client";
import Style from './styles/clockStyle.module.css'

function Timer(x:Boolean) {
  const [count, setCount] = useState(0);
  if(x){
    setCount((count)=>0);
  }
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
 
  return <h1>I have rendered {count} times!</h1>;
}



function App() {
  let [clicktime, setClicktime] = useState(0);
  
 const clicked=()=>{
    setClicktime((clicktime)=(clicktime+1)); 
 }
  return (
    <div className="App">
      <div className={Style.clock}><Clock /></div>
      <div ><Timer onHover/></div>
      {/* <button onClick={()=>reset()}>Reset</button> */}
      <button onClick={()=>clicked()}/>
      <div>{clicktime}</div>
      
      
    </div>
  );
}

export default App;
