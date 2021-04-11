import React, { Component } from 'react';
import Roll from 'react-reveal/Roll';
import RubberBand from 'react-reveal/RubberBand';
import Flash from 'react-reveal/Flash';

class Experience extends Component {
  state = {
    experience: [
      {
        index: '1', title: 'HeathLink Technologies Pvt. Ltd', year: 'JUNE 2019-JULY 2019', place: 'Intern',
        details: ["- Exposed to the basics of web development<br/>- Learnt HTML, CSS, Javascript, Bootstrap, PHP"], certificate: "https://drive.google.com/file/d/1Gis1WLuZv9dEy8ByweK3zVhff3T9IjYS/view?usp=sharing"
      }
    ]
  }
  render() {
    return (
      <div className='row pt-3 pb-3 Descr'>
        <Flash>
          <div className='offset-1 deschead'>E<br />X<br />P<br />E<br />R<br />I<br />E<br />N<br />C<br />E</div>
        </Flash>
        <RubberBand>
          <div className='offset-1 divcert'></div>
        </RubberBand>
        <div className='col-lg-8 offset-lg-1 col-9 pr-0'>
          {this.state.experience.map(edct => {
            let link = (<div><Roll bottom cascade><span>- Certificate is</span></Roll> <Roll bottom cascade><span><a href={edct.certificate} target="_blank">here</a></span></Roll></div>)
            return (
              <div key={edct.index}>
                <div className='row'>
                  <Roll top cascade>
                    <h3 className='col-lg-9 col-sm-7 phase'>{edct.title}</h3>
                    <h6 className='col-lg-3 col-sm-5 dura'>{edct.year}</h6>
                  </Roll>
                </div>
                <Roll bottom cascade>
                  <h5 className="phase">{edct.place}</h5>
                </Roll>

                <Roll bottom cascade>
                  {edct.details}{link}
                </Roll>
                <br />
              </div>

            );
          })}
        </div>

      </div >
    );
  }
}

export default Experience;