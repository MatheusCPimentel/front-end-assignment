import styled from 'styled-components';

export const MiniCartContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;

  min-width: 325px;

  padding: 1rem;

  display: flex;
  flex-direction: column;

  background-color: grey;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:nth-last-child(2) {
      margin-bottom: 2.1875rem;

      p:first-child {
        font-weight: 500;
      }

      p:last-child {
        font-weight: 700;
      }
    }

    &:last-child {
      gap: 0.8rem;

      button {
        width: 100%;
      }
    }
  }
`;

export const MiniCartList = styled.div`
  margin: 1.5rem 0 3.25rem;
`;

export const MiniCartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > p:last-of-type {
      font-weight: 500;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      margin-top: 1.6875rem;
    }
  }

  > div:last-child {
    display: flex;
    justify-content: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }

  img {
    width: 105px;
    height: 137px;
  }
`;
