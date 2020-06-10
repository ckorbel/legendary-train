import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS } from "../../queries/users";
import { getUsers } from "../../lib/user";

interface IUser {
  id?: string | number | undefined;
  name?: string;
  email?: string;
}

interface IUserState {
  users: IUser[] | null;
}

const Players: React.FC = () => {
  const [users, setUsers] = useState<any>();

  useEffect(() => {
    async function getUser() {
      const users = await getUsers();
      setUsers(users);
    }
    getUser();
  }, []);

  return (
    <div>
      <h1>Players Page</h1>
      {users
        ? users.map((user: IUser) => <h1 key={user.id}>{user.name}</h1>)
        : null}
    </div>
  );
};

export default Players;
