import React from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps {
  isSelected?: boolean;
  isOutOfStock?: boolean;
  isMinicart?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <ButtonContainer
        isSelected={this.props.isSelected}
        isOutOfStock={this.props.isOutOfStock}
        isMinicart={this.props.isMinicart}
        primary={this.props.primary}
        secondary={this.props.secondary}
      >
        {this.props.children}
      </ButtonContainer>
    );
  }
}
