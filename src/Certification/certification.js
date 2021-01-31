import React , { Component } from 'react';
import './certification.css';

class Certification extends Component {
  state={
    certificate: [
      {index:'1', title:'FULL STACK WEB DEVELOPMENT', year: '2020', course: 'Hong Kong University of Science & Technology(Coursera)', details:'Bootstrap CSS, Angular JS'},
      {index:'2', title:'MICROSOFT TECHNOLOGY ASSOCIATE', year: '2020', course: 'Introduction to Programming Using JavaScript -Certified', details:'Javascript'}
    ]
  }
  render() {
    return( <div className='row Descr pt-3 pb-3'><div className='col-9 pr-0' style={{paddingLeft:'95px'}}><br/><br/>{this.state.certificate.map(edct => {
      return(
      <div>
        <div className='row'>
          <h3 className='col-9'>{edct.title}</h3>
          <h6 className='col-1 offset-2 mt-2'>{edct.year}</h6>
        </div>
        <div>{edct.course}</div>
        <div>--{edct.details}</div>
        <br />
      </div>
      
      );
    })}</div>
    <div className='divcert'></div>
    <div className='col-1 deschead' style={{marginLeft:'80px'}}>C<br/>E<br/>R<br/>T<br/>I<br/>F<br/>I<br/>C<br/>A<br/>T<br/>I<br/>O<br/>N</div>
    </div>);
  }
}

export default Certification;