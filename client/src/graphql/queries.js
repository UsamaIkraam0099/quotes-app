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
