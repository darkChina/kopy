import { useState, useEffect } from "react";

type time = {
  serverTime?: "number";
};

export const ExchangeInfo = () => {
  const timeObj: time = {};
  const [time, setTime] = useState(timeObj);
  const [text, setText] = useState("");

  // useEffect(() => {
  //     fetch("https://api.binance.com/api/v3/exchangeInfo").then(res => res.json()).then(info => setInfo(info));
  // }, [])

  useEffect(() => {
    fetch("http://127.0.0.1:3000/hello")
      .then((res) => res.json())
      .then((time) => setTime(time));
  }, []);

  const clickHandler = async () => {
    const requestOptions = {
      method: "POST",
      //mode: 'cors',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };
    await fetch("http://127.0.0.1:3000/hello", requestOptions).then((res) =>
      console.log(res)
    );
  };

  return (
    <div>
      <h1>{time.serverTime}</h1>
      <h2>{text}</h2>
      <button onClick={clickHandler}>Add two!</button>
    </div>
  );
};
