import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './subComponents/navbar';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <p> PAGE NOT FOUND </p>
      </div>
    );
  }
}
