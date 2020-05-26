import React, { useState } from "react";
import gql from "graphql-tag";

interface IRegisterPageState {
  name: string;
  email: string;
  password: string;
}

const CREATE_NEW_USER = gql`
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data) {
      user {
        id
        name
        email
      }
      token
    }
  }
`;

const RegisterPage = () => {
  const [user, setUserData] = useState<IRegisterPageState>({
    name: "",
    email: "",
    password: ""
  });

  const updateUser = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setUserData({ [event.target.name]: event.target.value } as any);
  };

  return (
    <form>
      <input type="text" name="name" onChange={updateUser} value={user.name} />
      <input
        type="text"
        name="email"
        onChange={updateUser}
        value={user.email}
      />
      <input
        type="text"
        name="password"
        onChange={updateUser}
        value={user.password}
      />
    </form>
  );
};

export default RegisterPage;
