import { useState, useEffect } from "react";

type time = {
  serverTime?: "number";
};

export const ExchangeInfo = () => {
  const timeObj: time = {};
  const [time, setTime] = useState(timeObj);
  const [text, setText] = useState("default value");
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //     fetch("https://api.binance.com/api/v3/exchangeInfo").then(res => res.json()).then(info => setInfo(info));
  // }, [])

  useEffect(() => {
    fetch("http://127.0.0.1:3000/hello")
      .then((res) => res.json())
      .then((time) => setTime(time));
  }, []);

  const clickHandler = () => {
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ title: "React POST Request Example" }),
    // };
    // await fetch("http://127.0.0.1:3000/hello", requestOptions).then((res) =>
    //   res.json()).then(data => setText(data.text));
    fetch("http://127.0.0.1:3000/api/user")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.users);
        setUsers(data.users);
      });
  };

  return (
    <div>
      <h1>{time.serverTime}</h1>
      <h2>{text}</h2>
      <button onClick={clickHandler}>get users</button>
      {/* <div>
        {users.map((user) => {
          <p key={user._id}>{user.name}</p>;
        })}
      </div> */}
    </div>
  );
};
