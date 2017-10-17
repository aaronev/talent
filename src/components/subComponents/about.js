import React, { Component } from 'react';
import { Link } from 'react-router-dom';

$.get("https://www.learnersguild.org/about.html", data => {
   $( ".aboutLG" ).html(data);
})

export default class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="aboutLG"/>
    )
  }
}
