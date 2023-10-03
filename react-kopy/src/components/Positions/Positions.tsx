import Table from "react-bootstrap/Table";
import { PositionComponent } from "./PositionComponent";


interface Position {
  _id: string;
  login: number;
  openTime: string;
  symbol: string;
  direction: string;
  openPrice: number;
  profit: number;
}

export const Positions = (props: any) => {
  const positions = props.positions;
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Open Time</th>
          <th>Symbol</th>
          <th>Direction</th>
          <th>Volume</th>
          <th>Open Price</th>
          <th>Profit</th>
        </tr>
      </thead>
      <tbody>
        {positions.map((position: Position) => {
          return (
            <PositionComponent key={position._id} position={position} />
          );
        })}
      </tbody>
    </Table>
  );
};
