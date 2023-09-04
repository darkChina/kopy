import { Component, useState, useEffect } from "react";
import UserComponent from "./UserComponent";

interface User {
  _id: string;
  name: string;
  email: string;
}

const Test = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/user")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  const userComponentProps = {
    name: "this.state.users[0].name",
  };
  return <UserComponent {...userComponentProps} />;
};

export default Test;

// class Test extends Component {
//   constructor(props: any) {
//     super(props);
//     this.state = { users: [] };
//   }

//   componentDidMount(): void {
//     fetch("http://127.0.0.1:3000/api/user")
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState({ users: data.users });
//       });
//   }

//   render() {
//     const userComponentProps = {
//       name: "this.state.users[0].name",
//     };
//     console.log(this.state.users);
//     return (
//       <div>
//         <div>
//           <UserComponent {...userComponentProps} />
//           {/* {users.map((user) => {
//             <UserComponent  />;
//           })} */}
//         </div>
//       </div>
//     );
//   }
// }

// export default Test;
