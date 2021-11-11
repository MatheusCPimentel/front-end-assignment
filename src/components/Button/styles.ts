import styled, { css } from 'styled-components';

const SelectedButton = css`
  background-color: #1d1f22;
  color: #fff;

  border: 1px solid #1d1f22;
`;

const OutOfStockButton = css`
  color: #a6a6a6;
  border: 1px solid #a6a6a6;

  cursor: not-allowed;
`;

interface ButtonContainerProps {
  isSelected?: boolean;
  isOutOfStock?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  color: #292929;
  background-color: transparent;

  font-size: 1rem;

  border: 1px solid #1d1f22;

  padding: 0.875rem 1.43rem;

  ${({ isSelected }) => isSelected && SelectedButton}
  ${({ isOutOfStock }) => isOutOfStock && OutOfStockButton}
`;
