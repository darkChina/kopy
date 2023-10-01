import { Strategies } from "../Strategies/Strategies";
import { Positions } from "../Positions/Positions";
import { useEffect, useState } from "react";

export const HomePage = (props: any) => {
  const [strategies, setStrategies] = useState([]);
  const [strategyPositions, setStrategyPositions] = useState([]);
  const [followerPositions, setFollowerPositions] = useState([]);
  useEffect(() => {


    const interval = setInterval(() => {
      fetch("http://127.0.0.1:3000/api/strategies/get")
        .then((res) => res.json())
        .then((data) => {
          setStrategies(data.strategies);
        })
        .catch((error) => {
          console.log(error);
        });

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            login: 123
          }),
        };
        fetch("http://127.0.0.1:3000/api/strategies/positions/get", requestOptions)
          .then((res) => res.json())
          .then((data) => {
            setFollowerPositions(data.positions);
          })
          .catch((error) => {
            console.log(error);
          });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const onHandlePositions = (positions: any) => {
    setStrategyPositions(positions);
  };

  return (
    <div>
      <h1>Login: { props.login }</h1>
      <h2>Strategies</h2>
      <Strategies getPositions={onHandlePositions} strategies={strategies} />
      <h2>Strategy positions</h2>
      <Positions positions={strategyPositions} />
      <h2>My positions</h2>
      <Positions positions={followerPositions} />
    </div>
  );
};
