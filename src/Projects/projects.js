import React, { Component } from 'react';
import './project.css';
import Roll from 'react-reveal/Roll';
import RubberBand from 'react-reveal/RubberBand';
import Flash from 'react-reveal/Flash';

class Projects extends Component {
  state = {
    projects: [
      { index: '1', title: 'SHOPPING WEBSITE', year: 'OCT 2020 - NOV 2020', details: ["- Created a website for online shopping", "- Created a user-friendly voting system using PHP and MySQL", "- Spent a sufficiently high amount of time on the UI and UX of the project"], githubrepo: "https://github.com/Bhavesh56789/Shopping-Website", hosted: "https://queasiest-detention.000webhostapp.com/" },
      { index: '2', title: 'Percentage Calculator', year: 'NOV 2019 - DEC 2019', details: ["- Created a mobile application to compute the percentage of the input numbers", "- It was created using Cordova, hence works on iOS as well as Android", "- The GitHub repository for the project source is here"], githubrepo: "https://github.com/Bhavesh56789/Percentage-Calculator" }
    ]
  }
  render() {
    return (
      <div>
        <div className='row pt-3 pb-3 Descr'>
          <Flash>
            <div className='offset-1 deschead'>P<br />R<br />O<br />J<br />E<br />C<br />T<br />S</div>
          </Flash>
          <RubberBand>
            <div className='offset-lg-1 divcert'></div>
          </RubberBand>
          <div className='col-lg-8 col-sm-9 col-7 offset-lg-1 pr-0'>
            {this.state.projects.map(proj => {
              let link;
              if (proj.hosted) {
                link = (<div><Roll bottom cascade><span>- The GitHub repository for the project source is </span></Roll><Roll bottom cascade><span><a href={proj.githubrepo} target="_blank">here</a></span></Roll><Roll bottom cascade><span> and is hosted </span></Roll><Roll bottom cascade><span><a href={proj.hosted} target="_blank">here</a></span>
                </Roll></div>)
              }
              else {
                link = (<div><Roll bottom cascade><span>- The GitHub repository for the project source is </span></Roll><a href={proj.githubrepo} target="_blank"><Roll bottom cascade><span>here</span></Roll></a>
                </div>)
              }
              return (
                <div key={proj.index}>
                  <div className='row'>
                    <Roll top cascade>
                      <h3 className='col-lg-7 col-sm-7 col-12 phase'>{proj.title}</h3>
                      <h6 className='offset-lg-1 col-lg-4 col-sm-5 offset-0 col-12 dura'>{proj.year}</h6>
                    </Roll>
                  </div>
                  <Roll bottom cascade>
                    {proj.details}{link}
                  </Roll>
                </div>
              );
            })}
          </div>
        </div>

      </div >
    );
  }
}

export default Projects;