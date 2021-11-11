import React from 'react';

import { ProductListContainer, ProductItemsList, ProductItem } from './styles';

interface ProductListProps {
  category: string;
}

export class ProductList extends React.Component<ProductListProps> {
  render() {
    const item = {
      logo: 'https://github.com/matheuscpimentel.png',
      title: 'Apollo Running Short',
      price: '$50.00',
    };

    const items = [];

    for (let temp = 0; temp < 12; temp++) {
      items.push(item);
    }

    return (
      <ProductListContainer>
        <h1>{this.props.category}</h1>

        <ProductItemsList>
          {items.map(item => (
            <ProductItem>
              <img src={item.logo} alt={item.title} />
              <h4>{item.title}</h4>
              <h4>{item.price}</h4>
            </ProductItem>
          ))}
        </ProductItemsList>
      </ProductListContainer>
    );
  }
}
