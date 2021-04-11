import React, { Component } from 'react';
import './App.css';
import Intro from './Introduction/intro';
import Description from './Description';
import Sections from './navbar/navbar';
import Footer from './Footer/footer'
import { Route } from 'react-router-dom';
import { Fade } from 'react-animation-components'
class App extends Component {
  render() {
    return (
      <Fade in >
        <div className="App">
          <Sections />
          <Intro />
          <br />
          <Route path='/description/' component={Description} />
          <br />
          <Footer />
        </div>
      </Fade>
    );
  }
}

export default App;
