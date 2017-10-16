import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import User from './components/user';
import Home from './components/home';
import NotFound from './components/not-found';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/users" component={User}/>
    </div>
  </BrowserRouter>
  , document.querySelector('.container'))

