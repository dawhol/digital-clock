import React, { useState, useEffect } from "react";
import "./Clock.Styling.css";
function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); //every second we update the state of time with new current date and time

    return () => clearInterval(intervalId); //clear a function when, the component is unmounted
  }, []);

  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; //converting from military time(if hour is 13 modulo of 13%12 = 1 pm) If 12%12=0,add log. operator 'or' (||)

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }

  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }
  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
