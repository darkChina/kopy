import { Strategies } from "../Strategies/Strategies";
import { Positions } from "../Trades/Positions";
import { useEffect, useState } from "react";

const positions = [
  {
    openTime: "13-01-1988",
    symbol: "EURUSD",
    direction: "BUY",
    volume: 0.12,
    openPrice: 1.2171,
    profit: 91.23,
  },
  {
    openTime: "13-01-1988",
    symbol: "USDJPY",
    direction: "SELL",
    volume: 0.12,
    openPrice: 131.217,
    profit: 1.23,
  },
  {
    openTime: "13-01-1988",
    symbol: "BTCUSD",
    direction: "BUY",
    volume: 0.12,
    openPrice: 1.2171,
    profit: 91.23,
  },
  {
    openTime: "13-01-1988",
    symbol: "ETHUSD",
    direction: "SELL",
    volume: 0.12,
    openPrice: 131.217,
    profit: 1.23,
  },
];

export const HomePage = () => {
  const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/strategies/get")
      .then((res) => res.json())
      .then((data) => {
        setStrategies(data.strategies);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h1>Homepage</h1>
      <h2>Strategies</h2>
      <Strategies strategies={strategies} />
      <h2>My positions</h2>
      <Positions positions={positions} />
    </div>
  );
};
