import React, { Component } from 'react';
import './Description.css';
import Educations from './Education/educations';
import Certification from './Certification/certification';
import Skills from './skills&abilities/skills&ablities';
import Interest from './Interest/interest';


class Description extends Component {
  render() {
    return (
      <div>
        <Educations/>
        <br />
        <Certification />
        <br/>
        <div className='row'>
          <div className='col-6'>
            <Interest />
          </div>
          <div className='col-6'>
            <Skills />
          </div>
        </div>
        
      </div>
    );
  }
}

export default Description;
