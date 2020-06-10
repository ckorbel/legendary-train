import { GET_ALL_TEAMS, GET_TEAM_POST_SPENDING } from "../queries/team";
import { QueryOptions } from "apollo-boost";
import getClient from "../core/apollo/index";

const getTeams = async (): Promise<any> => {
  try {
    const client = await getClient();
    const options: QueryOptions = {
      query: GET_ALL_TEAMS,
    };
    const {
      data: { teams: data },
    } = await client.query(options);
    return data;
  } catch (err) {
    throw new Error(`something went wrong ${err}`);
  }
};

const getTeamPostionSpending = async (id: string): Promise<any> => {
  try {
    const client = await getClient();
    const options: QueryOptions = {
      query: GET_TEAM_POST_SPENDING,
      variables: {
        id,
      },
    };

    const {
      data: { team: data },
    } = await client.query(options);
    return data;
  } catch (err) {
    throw new Error(`something went wrong ${err}`);
  }
};

export { getTeams, getTeamPostionSpending };
