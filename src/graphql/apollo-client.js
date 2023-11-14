import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://excel-cms-cceb9bd017ad.herokuapp.com/graphql",
  // uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});
