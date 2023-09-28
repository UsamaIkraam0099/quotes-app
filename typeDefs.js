import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
    quotes: [Quote]
    user(_id: ID!): User
    quote(by: ID!): [Quote]
  }

  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    quotes: [Quote]
  }

  type Quote {
    name: String!
    by: String!
  }

  type Token {
    token: String
  }

  type Mutation {
    signUp(user: NewUser!): User
    signIn(email: String!, password: String!): SignInUser
    createQuote(name: String!): Quote
  }

  input NewUser {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type SignInUser {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    token: String!
  }
`;

export default typeDefs;
