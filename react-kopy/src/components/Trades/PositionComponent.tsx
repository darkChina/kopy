export const PositionComponent = (props: any) => {
  return (
    <tr>
      <td>{props.position.openTime}</td>
      <td>{props.position.symbol}</td>
      <td>{props.position.direction}</td>
      <td>{props.position.volume}</td>
      <td>{props.position.openPrice}</td>
      <td>{props.position.profit}</td>
    </tr>
  );
};
