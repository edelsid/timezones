import { useState, useEffect } from "react";

export function Clock({ item, deleteEntry }) {
  const [time, setTime] = useState(new Date());
  const { name, zone, id } = item;

  const getTime = () => {
    console.log('rendered')
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('deleted');
      clearInterval(timer);
    }
  };

  useEffect(getTime, []);

  return (
    <div className="widget">
      <div className="header">
        <p>{name}</p>
        <button className="del" id={id} type="button" onClick={deleteEntry}>x</button>
      </div>      
      <div className="clock">
        <span className="line hourLine" style={{
            transform: `rotate(${(time.getUTCHours() + parseInt(zone)) * 30}deg)`
        }}></span>
        <span className="line minLine" style={{
            transform: `rotate(${time.getUTCMinutes() * 6}deg)`
        }}></span>
        <span className="line secLine" style={{
            transform: `rotate(${time.getUTCSeconds() * 6}deg)`
        }}></span>
      </div>
    </div>
  )
}