import React from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps {
  isSelected?: boolean;
  isOutOfStock?: boolean;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <ButtonContainer
        isSelected={this.props.isSelected}
        isOutOfStock={this.props.isOutOfStock}
      >
        {this.props.children}
      </ButtonContainer>
    );
  }
}
