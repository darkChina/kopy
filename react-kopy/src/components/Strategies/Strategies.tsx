import Table from "react-bootstrap/Table";
import { StrategyComponent } from "./StrategyComponent";

interface Strategy {
  login: number;
  name: string;
  risk: number;
  investors: number;
}

export const Strategies = (props: any) => {
  const strategies = props.strategies;

  const onHandlePositions = (positions: any) => {
    props.getPositions(positions);
  }

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>#</th>
          <th>Login</th>
          <th>Name</th>
          <th>Risk Score</th>
          <th>Investors</th>
        </tr>
      </thead>
      <tbody>
        {strategies.map((strategy: Strategy) => {
          return (
            <StrategyComponent key={strategy.login} strategy={strategy} getPositions={onHandlePositions} />
          );
        })}
      </tbody>
    </Table>
  );
};
