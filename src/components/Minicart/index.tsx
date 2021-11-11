import React from 'react';
import { Button } from '../Button';

import { MiniCartContainer, MiniCartList, MiniCartItem } from './styles';

export class Minicart extends React.Component {
  render() {
    return (
      <MiniCartContainer>
        <span>
          <b>My Bag, </b>2 items
        </span>

        <MiniCartList>
          <MiniCartItem>
            <div>
              <p>Apollo</p>
              <p>Running Short</p>

              <p>$50.00</p>

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

              <img
                src="https://github.com/matheuscpimentel.png"
                alt="Product Picture"
              />
            </div>
          </MiniCartItem>
        </MiniCartList>

        <div>
          <p>Total</p>
          <p>$100.00</p>
        </div>

        <div>
          <button>View Bag</button>
          <button>Check Out</button>
        </div>
      </MiniCartContainer>
    );
  }
}
