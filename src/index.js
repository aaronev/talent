import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import User from './components/user';
import Home from './components/home';
import NotFound from './components/not-found';
import Navbar from './components/subComponent/navbar';

ReactDOM.render(
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/users" component={User}/>
      <Route component={NotFound}/>
    <Switch/>
  </BrowserRouter>
  , document.querySelector('.container'))

