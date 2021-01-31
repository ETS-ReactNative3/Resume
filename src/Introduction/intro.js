import React , { Component } from 'react';
import './intro.css';
import Objective from '../objective';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';


class Intro extends Component {
  state={
    skillsabilities: [
      {index:'1',skab:'Programming Languages Known - C, C++, Java, Python'},
      {index:'2',skab: 'Web Development Languages Known - HTML, CSS, JavaScript, PHP'},
      {index:'3',skab: 'Web Development Skills Using MEAN'},
      {index:'4',skab: ' Time Management and Organizational Skills'}
    ]
  }
  render() {
    return(
      <div className="row intro">
        <div className="hexagon">
          <div className="hexTop"></div>
          <div className="hexBottom"></div>
        </div>
        <div className='col-3 name' style={{textAlign:'start'}}>
          <h1 className="mb-0 fullname" style={{color:'white'}}>BHAVESH</h1>
          <h1 className='mb-0 fullname' style={{color:' rgb(204, 0, 143)'}}>BELLANEY</h1>
          <h4 style={{color:' rgb(163, 156, 156)'}}>WEB DEVELOPER</h4>
          <span>
            <a href="https://www.linkedin.com/in/bhavesh-bellaney-7b8553186">
              <LinkedInIcon color="primary" style={{ fontSize: 30 }}/>
            </a>
            <a href = "mailto: bhaveshbellaney@gmail.com"><MailIcon /></a>
            <a href="tel:7506432454"><PhoneIcon /></a>
          </span>
        </div> 
        <div className="divintro offset-2"></div>
        <div className='col-4 ml-3' style={{textAlign:'start', left:'30px'}}>
          <h3 style={{color:' rgb(163, 156, 156)'}}> About Me</h3>
          <Objective />
        </div>
      </div>
      
      );
  }
}

export default Intro;