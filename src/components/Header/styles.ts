import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 1.75rem 0 5rem;

  nav {
    display: flex;
    align-items: center;
  }

  > div {
    position: relative;

    svg {
      cursor: pointer;
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

  &:hover {
    color: #5ece7b;
  }
`;

interface CurrencyIconsProps {
  isCurrencyModalOpen: boolean;
}

const ArrowFlip = css`
  svg:nth-child(2) {
    transform: rotate(180deg);
  }
`;

export const CurrencyIcons = styled.div<CurrencyIconsProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-right: 1.2rem;

  svg {
    transition: transform 0.2s;
  }

  ${({ isCurrencyModalOpen }) => isCurrencyModalOpen && ArrowFlip}
`;

export const CurrencyModal = styled.div`
  position: absolute;
  top: 2rem;
  left: -1rem;

  display: flex;
  flex-direction: column;

  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  h4 {
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 1rem;

    &:hover {
      background-color: #5ece7b;
    }
  }
`;
