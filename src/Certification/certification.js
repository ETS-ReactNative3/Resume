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
      { index: '1', title: 'ORACLE CORPORATION', year: '2021', course: 'Oracle Certified Java Professional', details: ["--Java SE 11", "--Examination 1Z0-819"], certificate: "https://drive.google.com/file/d/1HPhFOaXR4pmrOQ8jJ1s9WYwaf56jgkMj/view?usp=sharing", badge: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C828F6B0B5B04C6C61B1BDDA7D28F62A8246702C9F754CF0AB9BBC33F885AC11" },
      { index: '2', title: 'FULL STACK WEB DEVELOPMENT', year: '2021', course: 'Hong Kong University of Science & Technology(Coursera)', details: '--HTML, CSS, Javascript, Bootstrap 4, Angular JS, NodeJS, Mongodb', certificate: "https://www.coursera.org/account/accomplishments/specialization/TSGYE475YGCA" },
      { index: '3', title: 'MICROSOFT TECHNOLOGY ASSOCIATE', year: '2020', course: ["Introduction to Programming Using JavaScript -Certified", "Examination 98382"], details: '--Javascript', certificate: "https://drive.google.com/file/d/14U_4ttNPNlvLVn35s1cI2Ifw7ih3JSUV/view?usp=sharing", badge: "https://www.credly.com/badges/1d90a468-aed3-49db-aaef-87b13a83dd0a/linked_in_profile" }
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
            let link;
            if (edct.badge) {
              link = (<div><Roll bottom cascade><span>-- Certificate is here </span></Roll><Roll bottom cascade><span><a href={edct.certificate} target="_blank">here</a></span></Roll><Roll bottom cascade><span> and badge is </span></Roll><Roll bottom cascade><span><a href={edct.badge} target="_blank">here</a></span>
              </Roll></div>)
            }
            else {
              link = (<div><Roll bottom cascade><span>-- Certificate is </span></Roll><a href={edct.certificate} target="_blank"><Roll bottom cascade><span>here</span></Roll></a>
              </div>)
            }
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

export default Certification;