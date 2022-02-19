import React, { Component } from 'react';
import '../Certification/certification.css';
import Roll from 'react-reveal/Roll';
import RubberBand from 'react-reveal/RubberBand';
import Flash from 'react-reveal/Flash';
// import { Fade } from 'react-animation-components'
// import { Transform } from 'react-animation-components'

class Publications extends Component {
  state = {
    certificate: [
      {
        index: '1', title: 'INFORMATION EXTRACTION FROM CORD-19 USING HIERARCHICAL CLUSTERING AND WORD BANK', year: '2021', details: ["-- Publisher: IEEE Xplore"], certificate: "https://drive.google.com/file/d/1nk-XDHAKlp4InnOrOSgvy5an7K-uZSVg/view?usp=sharing", paperlink: "https://ieeexplore.ieee.org/document/9580126"
      },

    ]
  }
  render() {
    return (
      <div className='row pt-3 pb-3 Descr'>
        <Flash>
          <div className='offset-1 deschead'>P<br />U<br />B<br />L<br />I<br />C<br />A<br />T<br />I<br />O<br />N</div>
        </Flash>
        <RubberBand>
          <div className='offset-1 divcert'></div>
        </RubberBand>
        <div className='col-8 offset-1 pr-0'>
          {this.state.certificate.map(edct => {
            let link;
            link = (<div><Roll bottom cascade><span>
              -- View the paper </span></Roll><Roll bottom cascade><span><a href={edct.paperlink} target="_blank">here</a></span></Roll><Roll bottom cascade><span> and presentation certificate </span></Roll><Roll bottom cascade><span><a href={edct.certificate} target="_blank">here</a></span>
              </Roll></div>)

            return (
              <div key={edct.index}>
                <div className='row'>
                  <Roll top cascade>
                    <h3 className='col-lg-10 col-sm-10 phase'>{edct.title}</h3>
                    <h6 className='col-lg-2 col-sm-2 dura'>{edct.year}</h6>
                  </Roll>
                </div>


                <div><Roll bottom cascade>{edct.details}{link}</Roll></div>


                <br />
              </div>

            );
          })}
        </div>

      </div >
    );
  }
}

export default Publications;