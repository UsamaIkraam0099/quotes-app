import { gql } from "@apollo/client";

export const GET_ALL_QUOTES = gql`
  query getAllQuotes {
    quotes {
      name
      by
    }
  }
`;

export const GET_QUOTES_BY_ID = gql`
  query getQuoteByUserId($quoteBy: ID!) {
    quote(by: $quoteBy) {
      by
      _id
      name
    }
  }
`;

export const CREATE_QUOTE = gql`
  mutation createNewQuote($name: String!) {
    quote: createQuote(name: $name) {
      by
      name
    }
  }
`;

export const DELETE_QUOTE = gql`
  mutation deleteQuote($_id: ID!) {
    quote: deleteQuote(_id: $_id) {
      message
    }
  }
`;

export const UPDATE_QUOTE = gql`
  mutation updateQuote($_id: ID!, $name: String!) {
    quote: updateQuote(_id: $_id, name: $name) {
      by
      name
    }
  }
`;
