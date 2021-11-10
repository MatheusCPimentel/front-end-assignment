import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.75rem 0;

  nav {
    ul {
      display: flex;
      align-items: center;

      li {
        position: relative;

        padding: 1rem 1rem 1.875rem;
        text-transform: uppercase;
        cursor: pointer;

        &:nth-child(1) {
          color: #5ece7b;
          font-weight: 600;

          &::after {
            position: absolute;
            bottom: 0;
            left: 0;

            content: '';

            width: 100%;

            border: 1px solid #5ece7b;
          }
        }
      }
    }
  }

  svg {
    cursor: pointer;

    &:last-child {
      margin-left: 1.2rem;
    }
  }
`;
