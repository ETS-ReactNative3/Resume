import React, { Component } from 'react';
import Education from './education';
import './education.css';
import Flash from 'react-reveal/Flash';
import RubberBand from 'react-reveal/RubberBand';
class Educations extends Component {
  state = {
    education: [
      { index: '1', phase: 'Bachelor of engineering(Computer)', duration: '2018-2022', institute: 'Thadomal Shahani Engineering College', board: 'University of Mumbai' },
      { index: '2', phase: 'Higher Education Certification', duration: '2016-2018', institute: 'Nirmala Memorial Foundation College of Science', board: 'Maharashtra State Board for Secondary & Higher Secondary Education' },
      { index: '3', phase: 'Secondary School Certification', duration: '2014-2016', institute: 'Pawar Public School', board: 'Indian Certificate of Secondary Education' }
    ]
  }
  render() {
    return (
      <div className='row pt-3 pb-3 Descr'>
        <Flash>
          <div className='offset-1 deschead'><br />E<br />D<br />U<br />C<br />A<br />T<br /> I<br />O<br />N</div>
        </Flash>
        <RubberBand>
          <div className="divider offset-1"></div>
        </RubberBand>

        <div className=' offset-lg-1 col-lg-8 col-9'>
          {this.state.education.map(edct => {
            return (
              <Education key={edct.index}
                phase={edct.phase}
                duration={edct.duration}
                institute={edct.institute}
                board={edct.board} />
            );
          })}
        </div>
      </div >);
  }
}

export default Educations;