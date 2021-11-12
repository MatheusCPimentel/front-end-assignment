import { gql } from '@apollo/client';

export const CURRENCY = gql`
  query {
    currencies
  }
`;
