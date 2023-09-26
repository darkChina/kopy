import { Strategies } from "../Strategies/Strategies";
import { Positions } from "../Positions/Positions";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [strategies, setStrategies] = useState([]);
  const [strategyPositions, setStrategyPositions] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/strategies/get")
      .then((res) => res.json())
      .then((data) => {
        setStrategies(data.strategies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onHandlePositions = (positions: any) => {
    console.log(positions)
    setStrategyPositions(positions)
  }

  return (
    <div>
      <h1>Homepage</h1>
      <h2>Strategies</h2>
      <Strategies getPositions={onHandlePositions} strategies={strategies} />
      <h2>Strategy positions</h2>
      <Positions positions={strategyPositions} />
      <h2>My positions</h2>
      <Positions positions={[]}/>
    </div>
  );
};
