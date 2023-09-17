import { useState, useEffect } from "react";

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
  console.log(users);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user: User) => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Test;
