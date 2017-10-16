import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <a href="/">Home</a>
          <a href="/users">App Page</a>
        </nav>
      </div>
    )
  };
}