import { GraphQLClient } from "graphql-request";
export { gql } from "graphql-request";

export const grafbase = new GraphQLClient("http://localhost:1337/graphql");
