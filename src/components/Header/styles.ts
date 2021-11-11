import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 1.75rem 0 5rem;

  nav {
    display: flex;
    align-items: center;
  }

  svg {
    cursor: pointer;

    &:last-child {
      margin-left: 1.2rem;
    }
  }
`;

interface CategoryLinkProps {
  isActive?: boolean;
}

const ActiveCategoryLink = css`
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
`;

export const CategoryLink = styled(Link)<CategoryLinkProps>`
  position: relative;
  color: #1d1f22;

  padding: 1rem 1rem 1.875rem;
  text-transform: uppercase;
  cursor: pointer;

  ${({ isActive }) => isActive && ActiveCategoryLink}
`;
