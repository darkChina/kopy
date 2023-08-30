import { useState, useEffect } from "react";

type info = {
  serverTime?: "number";
};

export const ExchangeInfo = () => {
  const counterResult: number = 0;
  const infoObj: info = {};
  const [counter, setCounter] = useState(counterResult);
  const [info, setInfo] = useState(infoObj);

  // useEffect(() => {
  //     fetch("https://api.binance.com/api/v3/exchangeInfo").then(res => res.json()).then(info => setInfo(info));
  // }, [])

  useEffect(() => {
    fetch("http://127.0.0.1:3000/hello")
      .then((res) => res.json())
      .then((info) => setInfo(info));
  }, []);

  const clickHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };
    fetch("http://127.0.0.1:3000/posttest", requestOptions).then(res => console.log(res));
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h2>{info.serverTime}</h2>
      <button onClick={clickHandler}>Add two!</button>
    </div>
  );
};
