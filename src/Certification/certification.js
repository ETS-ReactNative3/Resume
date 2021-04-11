import React, { Component } from 'react';
import './certification.css';
import Roll from 'react-reveal/Roll';
import RubberBand from 'react-reveal/RubberBand';
import Flash from 'react-reveal/Flash';
// import { Fade } from 'react-animation-components'
// import { Transform } from 'react-animation-components'

class Certification extends Component {
  state = {
    certificate: [
      { index: '1', title: 'FULL STACK WEB DEVELOPMENT', year: '2020', course: 'Hong Kong University of Science & Technology(Coursera)', details: '--Bootstrap CSS, Angular JS' },
      { index: '2', title: 'MICROSOFT TECHNOLOGY ASSOCIATE', year: '2020', course: 'Introduction to Programming Using JavaScript -Certified', details: '--Javascript' }
    ]
  }
  render() {
    return (
      <div className='row pt-3 pb-3 Descr'>
        <Flash>
          <div className='offset-1 deschead'>C<br />E<br />R<br />T<br />I<br />F<br />I<br />C<br />A<br />T<br />I<br />O<br />N</div>
        </Flash>
        <RubberBand>
          <div className='offset-1 divcert'></div>
        </RubberBand>
        <div className='col-8 offset-1 pr-0'>
          {this.state.certificate.map(edct => {
            return (
              <div key={edct.index}>
                <div className='row'>
                  <Roll top cascade>
                    <h3 className='col-lg-10 col-sm-10 phase'>{edct.title}</h3>
                    <h6 className='col-lg-2 col-sm-2 dura'>{edct.year}</h6>
                  </Roll>
                </div>
                <Roll bottom cascade>
                  <div>{edct.course}</div>
                </Roll>

                <div><Roll bottom cascade>{edct.details}</Roll></div>


                <br />
              </div>

            );
          })}
        </div>

      </div >
    );
  }
}

export default Certification;