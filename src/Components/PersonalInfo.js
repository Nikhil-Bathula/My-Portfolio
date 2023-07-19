import React from "react";
import '../CSS/PersonalInfo.css'

const PersonalInfo = () => {
  return (
    <header>
      <div className="CandidateName">Nikhil Bathula</div>
      <h5 className="Occupation">Web Development Student at Conestoga College
        with 5 Years of Industry Experience </h5>
      <span className="FuturePlans">Eager to Learn and Create Innovative Solutions</span>
      <nav className="navbar">
        <ul>
          <li className="navbar-content">
            <a href="#AboutMe">ABOUT</a>
          </li>
          <li className="navbar-content">
            <a href="#WorkExperience">EXPERIENCE</a>
          </li>
          <li className="navbar-content">
            <a href="#Projects">PROJECTS</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default PersonalInfo;