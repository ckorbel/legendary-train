import { gql } from "apollo-boost";

const GET_ALL_TEAMS = gql`
  query {
    teams(orderBy: name_ASC) {
      name
      id
      location
      logo
      division
      abbrv_location
    }
  }
`;

const GET_TEAM_SPENDING_POS_ONLY = gql`
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
      }
    }
  }
`;

const GET_TEAM_SPENDING_TEAM = gql`
  query team($id: ID!) {
    team(id: $id) {
      id
      name
      location
      abbrv_location
      division
      yearlyPostSpending {
        id
        year
        Defense
        Offense
      }
    }
  }
`;

const GET_TEAM_SPENDING_ALL = gql`
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

export {
  GET_ALL_TEAMS,
  GET_TEAM_SPENDING_ALL,
  GET_TEAM_SPENDING_TEAM,
  GET_TEAM_SPENDING_POS_ONLY,
};
