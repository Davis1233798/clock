import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";



function Clock() {
  let [curDate, setCurDate] = useState(new Date());

  const tick = () => {
    setCurDate(new Date());
  };

  useEffect(() => {
    tick();
  }); //To avoid infinite loop, you can add [] as 2nd param

  return (
    <div className="Clock">      
      <h2>{curDate.toLocaleString()}</h2>
    </div>
  );
}


export default Clock