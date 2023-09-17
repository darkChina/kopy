import Table from "react-bootstrap/Table";

export const Strategy = (props: any) => {
  return (
    <tr>
      <td>{props.strategy.name}</td>
      <td>{props.strategy.risk}</td>
      <td>{props.strategy.investors}</td>
    </tr>
  );
};
