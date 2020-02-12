import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import LargerCart from './pages/LargerCart';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Cart} />
        <Route path="/largercart" component={LargerCart} />
      </Switch>
    </BrowserRouter>
  );
}
