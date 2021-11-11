import React from 'react';

import { HeaderContainer, CategoryLink } from './styles';

import { Minicart } from '../Minicart';

import {
  AttachMoney,
  KeyboardArrowDown,
  ShoppingCartOutlined,
} from '@material-ui/icons';

interface HeaderProps {}

interface HeaderState {
  category: string;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      category: '',
    };
  }

  componentDidMount() {
    const initialCategory = window.location.pathname.split('/')[1];

    this.setState({ category: initialCategory });
  }

  render() {
    return (
      <HeaderContainer>
        <nav>
          <CategoryLink
            to="/women"
            isActive={this.state.category === 'women'}
            onClick={() => {
              this.setState({ category: 'women' });
            }}
          >
            Women
          </CategoryLink>

          <CategoryLink
            to="/men"
            isActive={this.state.category === 'men'}
            onClick={() => {
              this.setState({ category: 'men' });
            }}
          >
            Men
          </CategoryLink>

          <CategoryLink
            to="/kids"
            isActive={this.state.category === 'kids'}
            onClick={() => {
              this.setState({ category: 'kids' });
            }}
          >
            Kids
          </CategoryLink>
        </nav>

        <img src="images/logo.png" alt="Logo" />

        <div>
          <Minicart />

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
