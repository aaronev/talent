import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './subComponents/navbar';

export default class User extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <p>Talent@LearnersGuild.com</p>
      </div>
    );
  }
}
