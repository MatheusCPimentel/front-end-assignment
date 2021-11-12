import React from 'react';

import apolloClient from '../../service/index';
import { CURRENCY } from '../../queries';

import { Minicart } from '../Minicart';

import {
  AttachMoney,
  KeyboardArrowDown,
  ShoppingCartOutlined,
} from '@material-ui/icons';

import {
  HeaderContainer,
  CategoryLink,
  CurrencyIcons,
  CurrencyModal,
} from './styles';

interface HeaderProps {}

interface HeaderState {
  category: string;
  currencies: string[];
  isCartModalOpen: boolean;
  isCurrencyModalOpen: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      category: '',
      currencies: [''],
      isCartModalOpen: false,
      isCurrencyModalOpen: false,
    };
  }

  async componentDidMount() {
    const initialCategory = window.location.pathname.split('/')[1];

    const { data } = await apolloClient.query({
      query: CURRENCY,
    });

    this.setState({ category: initialCategory, currencies: data.currencies });
  }

  toggleCartModal() {
    this.state.isCurrencyModalOpen &&
      this.setState(prevState => ({
        isCurrencyModalOpen: !prevState.isCurrencyModalOpen,
      }));

    this.setState(prevState => ({
      isCartModalOpen: !prevState.isCartModalOpen,
    }));
  }

  toggleCurrencyModal() {
    this.state.isCartModalOpen &&
      this.setState(prevState => ({
        isCartModalOpen: !prevState.isCartModalOpen,
      }));

    this.setState(prevState => ({
      isCurrencyModalOpen: !prevState.isCurrencyModalOpen,
    }));
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
          {this.state.isCartModalOpen && <Minicart />}

          {this.state.isCurrencyModalOpen && (
            <CurrencyModal>
              {this.state.currencies.map(currency => (
                <h4>{currency}</h4>
              ))}
            </CurrencyModal>
          )}

          <CurrencyIcons
            onClick={() => this.toggleCurrencyModal()}
            isCurrencyModalOpen={this.state.isCurrencyModalOpen}
          >
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
          </CurrencyIcons>

          <ShoppingCartOutlined
            style={{
              color: '#1D1F22',
              fontSize: 24,
            }}
            onClick={() => this.toggleCartModal()}
          />
        </div>
      </HeaderContainer>
    );
  }
}
