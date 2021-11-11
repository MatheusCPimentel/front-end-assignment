import React from 'react';

import { Button } from '../../components/Button';

import {
  ProductDescriptionContainer,
  ImagesPreview,
  ProductInformation,
} from './styles';

export class ProductDescription extends React.Component {
  render() {
    return (
      <ProductDescriptionContainer>
        <ImagesPreview>
          <img
            src="https://github.com/matheuscpimentel.png"
            alt="Product Image"
          />
          <img
            src="https://github.com/matheuscpimentel.png"
            alt="Product Image"
          />
          <img
            src="https://github.com/matheuscpimentel.png"
            alt="Product Image"
          />
        </ImagesPreview>

        <img
          src="https://github.com/matheuscpimentel.png"
          alt="Product Image"
        />

        <ProductInformation>
          <div>
            <h2>Apollo</h2>
            <h2>Running Short</h2>
          </div>

          <div>
            <h4>Size:</h4>

            <div>
              <Button isOutOfStock>XS</Button>
              <Button isSelected>S</Button>
              <Button>M</Button>
              <Button>L</Button>
            </div>
          </div>

          <div>
            <h4>Price:</h4>
            <h3>$50.00</h3>
          </div>

          <button>Add to Cart</button>

          <p>
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </p>
        </ProductInformation>
      </ProductDescriptionContainer>
    );
  }
}
