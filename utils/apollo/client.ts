import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://graphnode.moondoge.com/subgraphs/name/moondogeswap/exchange",
  }),
  cache: new InMemoryCache(),
});
