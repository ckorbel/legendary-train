import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";

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

const RegisterPageStyled = styled.div`
  background-color: gray;
  width: 100%;
  min-height: 100vh;

  .register-form {
    width: 300px;
    margin: 0 auto;
    background-color: white;
    text-align: center;
  }

  input {
    line-height: 3.15;
  }

  .submit-button {
    font-size: var(--f6);
    margin-right: auto;
    margin-left: auto;
    text-transform: uppercase;
    background-color: #d52b1e;
    color: #fff;
    width: 100%;
    line-height: 1.25;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

const RegisterPage = () => {
  const [userData, setUserData] = useState<IRegisterPageState>({
    name: "",
    email: "",
    password: "",
  });

  const updateUser = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    } as any);
  };

  const onSubmit = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();
    console.log(userData);
  };

  const { name, email, password } = userData;

  return (
    <RegisterPageStyled>
      <div className="form-container">
        <form className="register-form" onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            name="name"
            onChange={(e) => updateUser(e)}
            value={name}
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="email"
            onChange={(e) => updateUser(e)}
            value={email}
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            name="password"
            onChange={(e) => updateUser(e)}
            value={password}
            placeholder="Password"
            required
          />
          <button className="submit-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </RegisterPageStyled>
  );
};

export default RegisterPage;
