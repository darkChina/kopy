import { useState } from "react";
import Button from "react-bootstrap/Button";

export const StrategyComponent = (props: any) => {

  const [openPositions, setOpenPositions] = useState([]);
  const onPositionsHandler = (event: any) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login: 123
      }),
    };
    fetch("http://127.0.0.1:3000/api/deals/get", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setOpenPositions(data.deals);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <tr>
      <td><Button variant="success">Follow</Button></td>
      <td><Button variant="info" onClick={onPositionsHandler}>Positions</Button></td>
      <td>{props.strategy.name}</td>
      <td>{props.strategy.risk}</td>
      <td>{props.strategy.investors}</td>
    </tr>
  );
};
