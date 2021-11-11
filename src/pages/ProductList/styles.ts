import styled from 'styled-components';

export const ProductListContainer = styled.div`
  h1 {
    font-weight: 400;
  }
`;

export const ProductItemsList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 6.4rem 3.5rem;

  padding: 7.125rem 0 7.125rem;

  svg {
    width: 338px;
    height: 356px;
  }
`;

export const ProductItem = styled.div`
  h4:first-of-type {
    margin: 1.5rem 0 0.5rem;
    font-weight: 300;
  }
`;
