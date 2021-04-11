import React, { Component } from 'react';
import Roll from 'react-reveal/Roll';
import Educations from './Education/educations';
import Certification from './Certification/certification';
import Projects from './Projects/projects';
import Skills from './skills&abilities/skills&ablities';
import Interest from './Interest/interest';
import { Fade } from 'react-animation-components';
import Intro from './Introduction/intro';
import Sections from './navbar/navbar';
import Footer from './Footer/footer'
import Pdf from "react-to-pdf";

const ref = React.createRef();

function Download() {
  return (
    <Fade in >
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div>
        <Roll left cascade >
          <Sections />
          <Intro />
          <br />
          <Educations /><br />
          <Certification /><br />
          <Projects />
          <Interest /><br />
          <Skills /><br />
        </Roll><br />
        <Footer />
      </div>
    </Fade>
  );
}

export default Download;