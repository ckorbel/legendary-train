import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

let apolloClient: ApolloClient<InMemoryCache>;
const cache = new InMemoryCache();

async function getClient(): Promise<ApolloClient<InMemoryCache>> {
  //   const authHeaders = await AuthorizationHeader.getCognitoHeader();
  //   let authTokenChanged = false;
  //   if (
  //     authHeaders &&
  //     authHeaders.headers &&
  //     authHeaders.headers.Authorization &&
  //     authHeaders.headers.Authorization !== Authorization
  //   ) {
  //     authTokenChanged = true;
  //     Authorization = authHeaders.headers.Authorization;
  //   }
  //   if (!apolloClient || authTokenChanged || forceRefresh) { }
  const opts = {
    uri: "http://localhost:4000/",
    cache,
  };
  apolloClient = new ApolloClient(opts);

  return apolloClient;
}

export default getClient;
