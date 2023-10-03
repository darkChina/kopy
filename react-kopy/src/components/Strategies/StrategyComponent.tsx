import Button from "react-bootstrap/Button";

export const StrategyComponent = (props: any) => {
  const onPositionsHandler = (event: any) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login: props.strategy.login,
      }),
    };
    fetch("http://127.0.0.1:3000/api/positions/get", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        props.getPositions(data.positions);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFollowingHandler = (event: any) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        strategy: 123,
        follower: 1
      }),
    };
    fetch("http://127.0.0.1:3000/api/subscriptions/create", requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  };

  return (
    <tr>
      <td>
        <Button variant="success" onClick={onFollowingHandler}>
          Follow
        </Button>
      </td>
      <td>
        <Button variant="info" onClick={onPositionsHandler}>
          Positions
        </Button>
      </td>
      <td>{props.strategy.login}</td>
      <td>{props.strategy.name}</td>
      <td>{props.strategy.risk}</td>
      <td>{props.strategy.investors}</td>
    </tr>
  );
};
