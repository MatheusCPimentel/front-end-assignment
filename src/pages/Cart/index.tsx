import React from 'react';

import { Button } from '../../components/Button';

import {
  CartContainer,
  ProductList,
  ProductItem,
  LeftContainer,
  RightContainer,
} from './styles';

export class Cart extends React.Component {
  render() {
    const item = {
      image: 'https://github.com/matheuscpimentel.png',
      title: 'Apollo',
      subtitle: 'Running Short',
      price: '$50.00',
    };

    const items = [];

    for (let temp = 0; temp < 5; temp++) {
      items.push(item);
    }

    return (
      <CartContainer>
        <h2>Cart</h2>

        <ProductList>
          {items.map(item => (
            <ProductItem>
              <LeftContainer>
                <h2>{item.title}</h2>
                <h2>{item.subtitle}</h2>

                <h3>{item.price}</h3>

                <div>
                  <Button>S</Button>
                  <Button isSelected>M</Button>
                </div>
              </LeftContainer>

              <RightContainer>
                <div>
                  <Button>+</Button>
                  <h3>1</h3>
                  <Button>-</Button>
                </div>

                <div>
                  <img
                    src={item.image}
                    alt={`${item.title} ${item.subtitle}`}
                  />
                </div>
              </RightContainer>
            </ProductItem>
          ))}
        </ProductList>
      </CartContainer>
    );
  }
}
