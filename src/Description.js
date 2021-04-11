import React, { Component } from 'react';
import './Description.css';
import Educations from './Education/educations';
import Certification from './Certification/certification';
import Projects from './Projects/projects';
import Skills from './skills&abilities/skills&ablities';
import Interest from './Interest/interest';
import { Route } from 'react-router-dom';
import Roll from 'react-reveal/Roll';
import Experience from './Experience/exprience';

class Description extends Component {
  render() {
    return (
      <div>
        <Roll left cascade>
          <Route path='/description/educ' component={Educations} />
          <Route path='/description/cert' component={Certification} />
          <Route path='/description/projects' component={Projects} />
          <Route path='/description/interest' component={Interest} />
          <Route path='/description/skills' component={Skills} />
          <Route path='/description/experience' component={Experience} />

        </Roll>
      </div>
    );
  }
}

export default Description;
