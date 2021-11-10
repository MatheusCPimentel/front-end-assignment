import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes as RoutesList,
} from 'react-router-dom';

export class Routes extends React.Component {
  render() {
    return (
      <Router>
        <RoutesList>
          <Route path="/women" element={<p>Women</p>} />
          <Route path="/men" element={<p>Men</p>} />
          <Route path="/kids" element={<p>Kids</p>} />
        </RoutesList>
      </Router>
    );
  }
}
