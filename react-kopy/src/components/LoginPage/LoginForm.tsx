import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {
  const [token, setToken] = useState("");

  const onSubmitHandler = () => {
    fetch("http://127.0.0.1:3000/api/user/getAllUsers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
        <Form.Text className="text-muted">
          We'll never share your name with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={onSubmitHandler}>
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
