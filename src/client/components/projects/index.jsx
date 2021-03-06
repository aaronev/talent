import React, { Component } from 'react';

export default class Projects extends Component {
 
  render() {
    console.log('in projects',this.props.projects)
    return this.props.projects.map((array) => {
      return array.map(project => {
         return (
          <div key={project.id}>
            <h4><a href={project.link}>{project.title}</a></h4>
          </div>
        );
      })
    });
  }
}
