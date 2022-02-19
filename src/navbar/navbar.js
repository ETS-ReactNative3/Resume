import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function Sections() {
  const handleCollapse = () => {
    console.log("handleCollapse");
    var nav = document.getElementById("navbarSupportedContent");
    var btn = document.getElementById("navbarBtn");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
  };
  return (
    <nav class="navbar navbar-expand-lg">

      <button className="navbar-toggler" id="navbarBtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <NavLink to="/description/education" exact className="font-weight-bold h5 nav-link" activeStyle={{
              borderBottom: '2px solid #e7032c',
              textDecoration: 'none', width: 'fit-content'
            }} onClick={handleCollapse}>Education</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/description/certifications" exact className="font-weight-bold h5  nav-link" activeStyle={{
              borderBottom: '2px solid #e7032c',
              textDecoration: 'none', width: 'fit-content'
            }} onClick={handleCollapse}>Certification</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/description/publications" exact className="font-weight-bold h5  nav-link" activeStyle={{
              borderBottom: '2px solid #e7032c',
              textDecoration: 'none', width: 'fit-content'
            }} onClick={handleCollapse}>Publications</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/description/projects" exact className="font-weight-bold h5  nav-link" activeStyle={{
              borderBottom: '2px solid #e7032c',
              textDecoration: 'none', width: 'fit-content'
            }} onClick={handleCollapse}>Projects</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/description/experience" exact className="font-weight-bold h5 nav-link" activeStyle={{
              borderBottom: '2px solid #e7032c',
              textDecoration: 'none', width: 'fit-content'
            }} onClick={handleCollapse}>Experience</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/description/skills" exact className="font-weight-bold h5 nav-link" activeStyle={{
              borderBottom: '2px solid #e7032c',
              textDecoration: 'none', width: 'fit-content'
            }} onClick={handleCollapse}>Skills</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/description/interest" exact className="font-weight-bold h5 nav-link" activeStyle={{
              borderBottom: '2px solid #e7032c',
              textDecoration: 'none', width: 'fit-content'
            }} onClick={handleCollapse}>Interest</NavLink>
          </li>
          <li class="nav-item">
            <a href="https://drive.google.com/file/d/1PUSkl1aIchonXkKcnPO5_iMqr-Xe4Won/view?usp=sharing" target="_blank" className="font-weight-bold h5 nav-link" onClick={handleCollapse}>View PDF</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sections;