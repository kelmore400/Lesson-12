import React, { useState, useEffect } from "react";

const ClockFunc = () => {
  let [date, tick] = useState(new Date());

  const timerID = setInterval(
    () => tick(date = new Date()),
    1000
  );

  return (
    <div>
      <h1>Привет, мир!</h1>
      <h2>Сейчас {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default ClockFunc;