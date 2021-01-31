import React , { Component } from 'react';

class Education extends Component {
  
  render() {
    return(
    <div>
      <div className='row'>
        <h3 className='col-7'>{this.props.phase}</h3>
        <h6 className='offset-3 col-2 mt-2'>{this.props.duration}</h6>
      </div>
      <div>{this.props.institute}</div>
      <div>{this.props.board}</div>
      <br />
    </div>
      
    );
  }
}

export default Education;