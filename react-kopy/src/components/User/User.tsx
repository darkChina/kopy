import { Component } from "react";

class User extends Component<{}, { name: string }> {
  constructor(props: any) {
    super(props);
    this.state = { name: props.name };
  }

  render() {
    return <h1>Hello, {this.state.name}!</h1>;
  }
}

export default User;
