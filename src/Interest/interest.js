import React, { Component } from 'react';
import './interest.css';
import RubberBand from 'react-reveal/RubberBand';
import Flash from 'react-reveal/Flash';
import Fade from 'react-reveal/Fade';

class Interest extends Component {
  state = {
    interests: [
      { index: '1', interest: '-Competitive Coding' },
      { index: '2', interest: '-Snooker, Swimmimg, Carrom' },
      { index: '3', interest: '-Cooking' },
      { index: '4', interest: '-Avid Reader' }
    ]
  }
  render() {
    return (
      <div className='row Descr pt-3 pb-3'>
        <Flash>
          <div className='offset-1 deschead'>I<br />N<br />T<br />E<br />R<br />E<br />S<br />T<br />S</div>
        </Flash>
        <RubberBand>
          <div className='divin offset-1'></div>
        </RubberBand>

        <div className='offset-1 col-8'>{this.state.interests.map(inte => {
          return (
            <div key={inte.index}>
              <Fade big cascade>
                <div className='skill' >{inte.interest}</div>
              </Fade>
            </div>
          );
        })}</div></div>);
  }
}

export default Interest;