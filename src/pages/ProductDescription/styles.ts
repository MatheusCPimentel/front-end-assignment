import styled from 'styled-components';

export const ProductDescriptionContainer = styled.div`
  display: flex;

  > img {
    width: 793px;
    height: 664px;

    margin: 0 6rem 0 2rem;
  }
`;

export const ImagesPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    width: 80px;
    height: 80px;
  }
`;

export const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 292px;

  h2:nth-child(2) {
    margin-top: 1rem;
    font-weight: 400;
  }

  h4 {
    text-transform: uppercase;
    font-weight: 700;
  }

  > div:nth-child(2) {
    > div {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      margin-top: 0.5rem;
    }
  }

  > div:nth-child(3) {
    h3 {
      margin-top: 1rem;
      font-weight: 700;
    }
  }

  > button {
    background-color: #5ece7b;
    color: #fff;

    text-transform: uppercase;
    padding: 1rem 5.875rem;
    border: none;

    transition: filter 0.2s;

    &:hover {
      filter: opacity(0.9);
    }
  }

  > p {
    line-height: 1.6rem;
  }
`;
