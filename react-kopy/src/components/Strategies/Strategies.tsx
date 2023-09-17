import Table from "react-bootstrap/Table";
import { StrategyComponent } from "./StrategyComponent";

interface Strategy {
  name: string;
  risk: number;
  investors: number;
}

export const Strategies = (props: any) => {
  const strategies = props.strategies;
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>#</th>
          <th>Name</th>
          <th>Risk Score</th>
          <th>Investors</th>
        </tr>
      </thead>
      <tbody>
        {strategies.map((strategy: Strategy) => {
          return (
            <StrategyComponent strategy={strategy} />
          );
        })}
      </tbody>
    </Table>
  );
};
