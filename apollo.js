import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/link-context";
import { getItemAsync } from "expo-secure-store";

const GRAPHQL_API_URL = process.env.EXPO_PUBLIC_GRAPHQL_API_URL;
const TOKEN = process.env.EXPO_PUBLIC_API_TOKEN;

const asyncAuthLink = setContext(async (_, { headers }) => {
  const token = await getItemAsync("token");

  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token ?? TOKEN}`,
    },
  };
});

const httpLink = new HttpLink({
  uri: GRAPHQL_API_URL,
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: asyncAuthLink.concat(httpLink),
});
