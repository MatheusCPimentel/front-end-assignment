import { gql } from '@apollo/client';

export const CURRENCY = gql`
  query {
    currencies
  }
`;

export const CATEGORY = gql`
  query {
    categories {
      name
    }
  }
`;
