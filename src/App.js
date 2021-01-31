import React, { Component } from 'react';
import './App.css';
import Intro from './Introduction/intro';
import Description from './Description';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro/>
        <br />
        <Description />
        <br />
      </div>
    );
  }
}

export default App;
