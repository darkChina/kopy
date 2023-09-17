import Table from "react-bootstrap/Table";


interface Strategy {
  name: string;
  risk: number;
  investors: number;
}

export const Strategies = (props: any) => {
  const strategies = props.strategies;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Risk Score</th>
          <th>Investors</th>
        </tr>
      </thead>
      <tbody>
        {strategies.map((strategy: Strategy) => {
          return (
            <tr>
              <td>{strategy.name}</td>
              <td>{strategy.risk}</td>
              <td>{strategy.investors}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
