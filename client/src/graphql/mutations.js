import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    user: signIn(email: $email, password: $password) {
      firstName
      lastName
      email
      _id
      token
    }
  }
`;

export const SIGN_UP = gql`
  mutation signUp($user: NewUser!) {
    user: signUp(user: $user) {
      firstName
      lastName
      email
      _id
      token
    }
  }
`;
