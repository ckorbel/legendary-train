import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_USERS } from "../../queries/users";

interface User {
  id?: string | number | undefined;
  name?: string;
  email?: string;
}

interface UserData {
  users: User[];
}

const Players: React.FC = () => {
  const { loading, data } = useQuery<UserData>(GET_USERS);
  const displayUsers = () => {
    if (data?.users) {
      return data.users.map((user: User) => <h1 key={user.id}>{user.name}</h1>);
    } else {
      return <div>Users are loading</div>;
    }
  };

  return (
    <div>
      I am home Players Page
      {displayUsers()}
    </div>
  );
};

export default Players;
