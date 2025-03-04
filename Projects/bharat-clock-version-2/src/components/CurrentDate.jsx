import { useEffect } from "react";
import { useState } from "react";

function CurrentDate() {
  const [time, setTime] = useState(new Date());

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date());
    },1000 );
    return ()=>{
      clearInterval(intervalId);
      console.log("canceled the interval");
    };
  },[]);
  return (
    <p>
      This is current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}
export default CurrentDate;
