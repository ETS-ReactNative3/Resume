import React , { Component } from 'react';
import './skill.css';
class Skills extends Component {
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
    <div className='row Descr pt-3 pb-3'><br />
      <div className='offset-1 deschead'>S<br/>K<br/>I<br/>L<br/>L<br/>S</div>
    <div className='divsk offset-1'></div>
    <div className='col-9'>{this.state.skillsabilities.map(edct => {
      return(
        <div>
          <div className='skill'>-{edct.skab}</div>
        </div>
      );
    })}</div></div>);
  }
}

export default Skills;