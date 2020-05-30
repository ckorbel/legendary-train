import React, { useState } from "react";
import gql from "graphql-tag";
import { RegisterPageStyled } from "./RegisterPageStyled";
import { useMutation } from "@apollo/react-hooks";

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

  const createUser = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();
    console.log(userData);
  };

  const { name, email, password } = userData;
  return (
    <RegisterPageStyled className="container">
      <div className="row form-container">
        <div className="col-sm-6 col-md-4 col-md-offset-4 main-form">
          <h1 className="text-center login-title">Sign in</h1>
          <div className="account-wall">
            <img
              className="profile-img"
              src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
              alt=""
            />
            <form className="form-signin" onSubmit={(e): void => createUser(e)}>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="name"
                value={name}
                onChange={(e): void => updateUser(e)}
                required
              />
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e): void => updateUser(e)}
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e): void => updateUser(e)}
                required
              />
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Sign in
              </button>
              <label className="checkbox pull-left">
                <input type="checkbox" value="remember-me" />
                Remember me
              </label>
              <a href="#" className="pull-right need-help">
                Need help?{" "}
              </a>
              <span className="clearfix"></span>
            </form>
          </div>
          <a href="#" className="text-center new-account">
            Create an account{" "}
          </a>
        </div>
      </div>
    </RegisterPageStyled>
  );
};

export default RegisterPage;
