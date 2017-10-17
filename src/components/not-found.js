import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './subComponents/navbar';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <i> error_outline </i>
        <h2>Page Not Found</h2>
      </div>
    );
  }
}
