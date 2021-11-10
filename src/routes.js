import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes as RoutesList,
} from 'react-router-dom';

import { ProductList } from './pages/productList';

export class Routes extends React.Component {
  render() {
    return (
      <Router>
        <RoutesList>
          <Route path="/" element={<ProductList />} />
        </RoutesList>
      </Router>
    );
  }
}
