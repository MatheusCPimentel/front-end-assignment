import React from 'react';

import { HeaderContainer } from './styles';

import {
  AttachMoney,
  KeyboardArrowDown,
  ShoppingCartOutlined,
} from '@material-ui/icons';

export class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <nav>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
          </ul>
        </nav>

        <img src="images/logo.png" alt="Logo" />

        <div>
          <AttachMoney
            style={{
              color: '#1D1F22',
              fontSize: 24,
            }}
          />

          <KeyboardArrowDown
            style={{
              color: '#1D1F22',
              fontSize: 17,
            }}
          />

          <ShoppingCartOutlined
            style={{
              color: '#1D1F22',
              fontSize: 24,
            }}
          />
        </div>
      </HeaderContainer>
    );
  }
}
