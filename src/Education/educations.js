import React , { Component } from 'react';
import Education from './education';
import './education.css';

class Educations extends Component {
  state={
    education: [
      {index:'1',phase:'Bachelor of engineering(Computer)',duration:'2018-2022',institute:'Thadomal Shahani Engineering College',board:'University of Mumbai'},
      {index:'2',phase:'Higher Education Certification' ,duration:'2016-2018' ,institute:'Nirmala Memorial Foundation College of Science' ,board:'Maharashtra State Board for Secondary & Higher Secondary Education'}
    ]
  }
  render() {
    return( 
    <div className='row pt-3 pb-3 Descr'>
      <div className='offset-1 deschead'><br/>E<br/>D<br/>U<br/>C<br/>A<br/>T<br/> I<br/>O<br/>N</div>
      <div className="divider offset-1"></div>
      <div className='col-9'>
        {this.state.education.map(edct => {
        return(
        <Education key={edct.index}
        phase={edct.phase}
        duration={edct.duration}
        institute={edct.institute}
        board={edct.board}/>
        );
      })}
      </div>
    </div>);
  }
}

export default Educations;