import Button from "react-bootstrap/Button";

export const StrategyComponent = (props: any) => {
  return (
    <tr>
      <td><Button variant="success">Follow</Button></td>
      <td><Button variant="info">Positions</Button></td>
      <td>{props.strategy.name}</td>
      <td>{props.strategy.risk}</td>
      <td>{props.strategy.investors}</td>
    </tr>
  );
};
