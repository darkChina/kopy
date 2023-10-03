import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { HomePage } from "../HomePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {
  const [token, setToken] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login,
        password,
      }),
    };

    fetch("http://127.0.0.1:3000/api/users/login", requestOptions).then(
      (res: any) => {
        if (res.status == 200) {
          res
            .json()
            .then((data: any) => {
              console.log(data);
              setToken(data.token);
            })
            .catch((error: any) => {
              console.log(error);
            });
        }
      }
    );
  };

  const onLoginChangeHandler = (event: any) => {
    event.preventDefault();
    setLogin(event.target.value);
  };

  const onPasswordChangeHandler = (event: any) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  if (token === "") {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter login"
            onChange={onLoginChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={onPasswordChangeHandler}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onSubmitHandler}>
          Submit
        </Button>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Text className="text-muted">{token}</Form.Text>
        </Form.Group>
      </Form>
    );
  }
  return <HomePage login={login} />;
};

export default LoginForm;
