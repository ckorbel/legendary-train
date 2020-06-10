import { gql } from "apollo-boost";

const GET_ALL_TEAMS = gql`
  query {
    teams {
      name
      id
      location
      logo
      division
      abbrv_location
    }
  }
`;

const GET_TEAM_POST_SPENDING = gql`
  query team($id: ID!) {
    team(id: $id) {
      id
      name
      location
      abbrv_location
      division
      yearlyPostSpending {
        id
        qb
        rb
        wr
        te
        ol
        dl
        lb
        s
        cb
        year
        Defense
        Offense
      }
    }
  }
`;

export { GET_ALL_TEAMS, GET_TEAM_POST_SPENDING };
