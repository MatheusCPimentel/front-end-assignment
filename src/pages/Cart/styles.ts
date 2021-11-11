import styled from 'styled-components';

export const CartContainer = styled.div`
  > h2 {
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const ProductList = styled.div`
  margin: 3.75rem 0 3.75rem;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.25rem 0 2rem;

  border-top: 1px solid #e5e5e5;
`;

export const LeftContainer = styled.div`
  > h2:nth-child(2) {
    margin: 0.5rem 0 1rem;
    font-weight: 400;
  }

  > h3 {
    font-weight: 700;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    margin-top: 1rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 0.8rem;

  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    button {
      font-size: 3rem;
      font-weight: 300;

      padding: 0 1rem;
    }
  }

  img {
    width: 141px;
    height: 185px;
  }
`;
