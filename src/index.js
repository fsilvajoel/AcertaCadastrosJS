import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Register from './pages/Register';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
