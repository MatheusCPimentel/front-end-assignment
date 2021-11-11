import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes as RoutesList,
} from 'react-router-dom';

import { Header } from './components/Header';

import { ProductList } from './pages/ProductList';
import { ProductDescription } from './pages/ProductDescription';
import { Cart } from './pages/Cart';

export class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header />

        <RoutesList>
          <Route path="/women" element={<ProductList category={'Women'} />} />
          <Route path="/men" element={<ProductList category={'Men'} />} />
          <Route path="/kids" element={<ProductList category={'Kids'} />} />

          <Route path="/description" element={<ProductDescription />} />

          <Route path="/cart" element={<Cart />} />
        </RoutesList>
      </Router>
    );
  }
}
