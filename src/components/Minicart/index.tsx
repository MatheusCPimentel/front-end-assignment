import React from 'react';
import { Button } from '../Button';

import { MiniCartContainer, MiniCartList, MiniCartItem } from './styles';

export class Minicart extends React.Component {
  render() {
    const item = {
      image: 'https://github.com/matheuscpimentel.png',
      title: 'Apollo',
      subtitle: 'Running Short',
      price: '$50.00',
    };

    const items = [];

    for (let temp = 0; temp < 2; temp++) {
      items.push(item);
    }

    return (
      <MiniCartContainer>
        <span>
          <b>My Bag, </b>
          {items.length} items
        </span>

        <MiniCartList>
          {items.map(item => (
            <MiniCartItem>
              <div>
                <p>{item.title}</p>
                <p>{item.subtitle}</p>

                <p>{item.price}</p>

                <div>
                  <Button isMinicart>S</Button>
                  <Button isOutOfStock isMinicart>
                    M
                  </Button>
                </div>
              </div>

              <div>
                <div>
                  <Button isMinicart>+</Button>
                  <p>1</p>
                  <Button isMinicart>-</Button>
                </div>

                <img src={item.image} alt="Product Picture" />
              </div>
            </MiniCartItem>
          ))}
        </MiniCartList>

        <div>
          <p>Total</p>
          <p>$100.00</p>
        </div>

        <div>
          <Button secondary>View Bag</Button>
          <Button primary>Check Out</Button>
        </div>
      </MiniCartContainer>
    );
  }
}
