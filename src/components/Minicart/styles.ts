import styled from 'styled-components';

export const MiniCartContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;

  min-width: 325px;

  padding: 1rem;

  display: flex;
  flex-direction: column;

  background-color: #fff;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

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
        font-size: 0.875rem;
        width: 100%;
        padding: 0.8125rem 1.843rem;
      }
    }
  }
`;

export const MiniCartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.75rem;

  margin: 1.6rem 0 3.25rem;
`;

export const MiniCartItem = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  width: 100%;

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
    gap: 0.8rem;

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
