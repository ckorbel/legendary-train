import { gql } from "apollo-boost";

const GET_USERS = gql`
  query {
    users {
      name
      id
    }
  }
`;

export { GET_USERS };
