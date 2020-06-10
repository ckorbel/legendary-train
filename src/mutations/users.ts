import { gql } from "apollo-boost";

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

export { CREATE_NEW_USER };
