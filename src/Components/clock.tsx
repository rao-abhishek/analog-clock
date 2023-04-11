import React, { useState, useEffect } from "react";


const Clock = ():any => {
  const size = 200;
  const [date, setDate] = useState(new Date());

  const updateTime = () => {
    setDate(new Date());
    console.log("Set");
  }

  useEffect(() => {
    console.log("hello");
     const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer)
    }, []);

  const radius = size / 2;
  const cx = radius;
  const cy = radius;
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours() % 12;

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours + minutes / 60) / 12) * 360;

  return (
    <div >
      <p>{String(date)}</p>
      <p>{secondDegrees}, {minuteDegrees}, {hourDegrees}</p>
    <svg width={size} height={size}>
     
      <circle
        cx={cx}
        cy={cy}
        r={radius - 5}
        fill="lightblue"
        stroke="black"
        strokeWidth="2"
      />
      <line
        x1={cx}
        y1={cy}
        x2={cx + Math.sin((secondDegrees *Math.PI)/180) * (radius - 10)}
        y2={cy - Math.cos((secondDegrees * Math.PI)/180) * (radius - 10)}
        stroke="red"
        strokeWidth="1.5"
      />
      <line
        x1={cx}
        y1={cy}
        x2={cx + Math.sin((minuteDegrees * Math.PI) / 180) * (radius - 20)}
        y2={cy - Math.cos((minuteDegrees * Math.PI) / 180) * (radius - 20)}
        stroke="black"
        strokeWidth="3"
      />
      <line
        x1={cx}
        y1={cy}
        x2={cx + Math.sin((hourDegrees * Math.PI) / 180) * (radius - 30)}
        y2={cy - Math.cos((hourDegrees * Math.PI) / 180) * (radius - 30)}
        stroke="black"
        strokeWidth="4"
      />
      <circle cx={cx} cy={cy} r="5" fill="black" />
    </svg>
    </div>

  );
};

export default Clock;
