import React , { Component } from 'react';
import './interest.css';
class Interest extends Component {
  state={
    interests: [
      {index:'1',interest:'Competitive Coding'},
      {index:'2',interest: 'Snooker, Swimmimg'},
      {index:'3',interest: 'Cooking'},
      {index:'4',interest: 'Avid Reader'}
    ]
  }
  render() {
    return( 
    <div className='row Descr pt-3 pb-3'>
      <div className='offset-1 deschead'>I<br/>N<br/>T<br/>E<br/>R<br/>E<br/>S<br/>T<br/>S</div>
    <div className='divin offset-1'></div>
    <div className='col-9'>{this.state.interests.map(inte => {
      return(
        <div>
          <div className='skill'>-{inte.interest}</div>
        </div>
      );
    })}</div></div>);
  }
}

export default Interest;