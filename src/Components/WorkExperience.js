import React from 'react';
import '../CSS/WorkExperience.css';

const WorkExperience = () => {
  return (
    <div>
      <div class="block1">
        <div class="content1">
          <div className='fromTo1'>
            <span>01/2022 - 09/2022</span>
          </div>
          <div>
            <b className='companyName'>Consultant - Capgemini</b>
            <ul>
              <li>
                Analyzing new business requirements and transforming all requirements into
                functional design specifications.
              </li>
              <li>
                Took leadership in coordinating with Off-shore Team regarding requirement
                clarifications, implementations, and activities of the Project.
              </li>
              <li>
                Implemented JSON web token for login authentication.
              </li>
            </ul>
            <div>
              <ul className='skillsList'>
                <li className='skills'>ReactJS</li>
                <li className='skills'>NodeJS</li>
                <li className='skills'>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="overlay1">
        </div>
      </div>
      <div class="block2">
        <div class="content2">
          <div className='fromTo2'>
            <span>01/2021 - 12/2021</span>
          </div>
          <div>
            <b className='companyName'>Software Engineer - Infinite Computer Solutions</b>
            <ul>
              <li>
                Analyzing new business requirements and transforming all requirements into
                functional design specifications.
              </li>
              <li>
                Implement a graphical representation using D3JS for easy access to ticket activities, including ticket state, status, and comments.
              </li>
              <li>
                Sticking to given deadlines and delivering code with good quality.
              </li>
            </ul>
            <div>
              <ul className='skillsList'>
                <li className='skills'>ReactJS</li>
                <li className='skills'>D3JS</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="overlay2">
        </div>
      </div>
      <div class="block3">
        <div class="content3">
          <div className='fromTo3'>
            <span>10/2019 - 12/2020</span>
          </div>
          <div>
            <b className='companyName'>Specialist - PwC India</b>
            <ul>
              <li>
                Coordinated with On-site Team regarding requirement clarifications and was the
                Point of Contact for the Off-shore Team for Task detailing.
              </li>
              <li>
                Integrated External tool API’s into the services in an efficient way.
              </li>
            </ul>
            <div>
              <ul className='skillsList'>
                <li className='skills'>ReactJS</li>
                <li className='skills'>VueJS</li>
                <li className='skills'>NodeJS</li>
                <li className='skills'>Postgres</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="overlay3">
        </div>
      </div>
      <div class="block4">
        <div class="content4">
          <div className='fromTo4'>
            <span>09/2017 - 10/2019</span>
          </div>
          <div>
            <b className='companyName'>Software Engineer - McBitss Technologies</b>
            <ul>
              <li>
                Designed and developed UI portals using ReactJS consuming REST API’s of the
                System.
              </li>
              <li>
                Worked as a Member in Cross-Functional Team which takes care of Smooth
                Releases/Deployments and Fixing the Issues within short time.
              </li>
              <li>
                Part of Development Support Team whose responsibility is to fix the issues/bugs
                raised by clients within a short time period.
              </li>
            </ul>
            <div>
              <ul className='skillsList'>
                <li className='skills'>ReactJS</li>
                <li className='skills'>NodeJS</li>
                <li className='skills'>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="overlay4">
        </div>
      </div>
    </div>
  )
}

export default WorkExperience;