import { GET_USERS } from "../queries/users";
import { CREATE_NEW_USER } from "../mutations/users";
import ApolloClient, { QueryOptions, MutationOptions } from "apollo-boost";
import getClient from "../core/apollo/index";

interface User {
  name: string;
  email: string;
  password: string;
}

interface Data {
  user: User;
}

export const getUsers = async (): Promise<any> => {
  try {
    const client = await getClient();
    const options: QueryOptions = {
      query: GET_USERS,
    };
    const {
      data: { users: data },
    } = await client.query(options);
    console.log(data, "test");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const registerNewUser = async (data: User): Promise<any> => {
  try {
    const client = await getClient();

    const options: MutationOptions = {
      mutation: CREATE_NEW_USER,
      variables: {
        data,
      },
    };

    const res = await client.mutate(options);
  } catch (err) {
    throw new Error(`Error is registering new user ${err}`);
  }
};
