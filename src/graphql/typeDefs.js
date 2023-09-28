import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
    quotes: [Quote]
    user(id: ID!): User
    quote(by: ID!): [Quote]
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    quotes: [Quote]
  }

  type Quote {
    name: String
    by: String
  }
`;

export default typeDefs;
