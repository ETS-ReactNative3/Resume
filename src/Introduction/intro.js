import React, { Component } from 'react';
import './intro.css';
import Objective from '../objective';


class Intro extends Component {
  state = {
    skillsabilities: [
      { index: '1', skab: 'Programming Languages Known - C, C++, Java, Python' },
      { index: '2', skab: 'Web Development Languages Known - HTML, CSS, JavaScript, PHP, React, Node.js, Bootstrap' },
      { index: '3', skab: 'Web Development Skills Using MERN' },
      { index: '4', skab: ' Time Management and Organizational Skills' }
    ]
  }
  render() {
    return (
      <div className="row intro">
        <div className="col-lg-4 col-md-6 pict">
          <div className="hexagon">
            <div className="hexTop"></div>
            <div className="hexBottom"></div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 name'>
          <h1 className="mb-0 fullname" style={{ color: 'white' }}>BHAVESH</h1>
          <h1 className='mb-0 fullname' style={{ color: 'deepskyblue' }}>BELLANEY</h1>
          <h4 style={{ color: 'greenyellow' }}>WEB DEVELOPER</h4>

        </div>
        <div className="divintro"></div>
        <div className='col-lg-4 col-md-12 col-sm-12 about'>
          <h3 style={{ color: ' rgb(163, 156, 156)' }}> My Objective</h3>
          <Objective />
        </div>
      </div >

    );
  }
}

export default Intro;