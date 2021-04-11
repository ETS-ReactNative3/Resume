import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

class Education extends Component {

  render() {
    return (
      <div>
        <div className='row'>
          <Zoom top cascade>
            <h2 className='col-sm-9 col-12 phase'>{this.props.phase}</h2>
          </Zoom>
          <Zoom right cascade>
            <h6 className='col-sm-3 col-12 mt-2 dura'>{this.props.duration}</h6>
          </Zoom>
        </div>
        <Zoom bottom cascade>
          <h5 className="ins">{this.props.institute}</h5>
          <h6 className="board">{this.props.board}</h6>
        </Zoom>
        <br />
      </div>

    );
  }
}

export default Education;