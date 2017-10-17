import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './subComponents/navbar';
import About from './subComponents/about';
import Learners from './subComponents/learners';
import Projects from './subComponents/projects';

const data = [
  {
    id: 1,
    title: "about",
    info: "some info"
  }
]
        // <!--<About data={data[0]}/>-->

export default class Home extends Component {
  
  render() {

    return (
      <div>
      </div>
    );
  }

}
