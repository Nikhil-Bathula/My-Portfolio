import React from "react";
import '../CSS/Projects.css';
import Capgemini from '../Images/Capgemini-Logo.png';
import ICS from '../Images/ICS-Logo.png';

const Projects = () => {
  return (
    <div>
      <div class="project1">
        <div class="projectcontent1">
          <div className='logo1'>
            <span>01/2022 - 09/2022</span>
          </div>
          <div className="aboutProject">
            <b className='clientName'>Barclays</b>
            <div className="projectDescription">
              During the migration process of the existing application to ReactJS, I took the responsibility of starting the project from scratch. By utilizing the strengths of React and Node, I successfully achieved a smooth transition to the new technology stack. As the application pertained to the banking domain, I carefully integrated crucial functionalities and features specific to the industry. To ensure efficient and secure data management, I implemented MySQL as the database solution. Through this migration, my main objectives were to enhance the application's performance, improve user experience, and maintain long-term maintainability while harnessing the capabilities of ReactJS and NodeJS.
            </div>
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
      <div class="project2">
        <div class="projectcontent2">
          <div className='logo2'>
            <span>01/2021 - 12/2021</span>
          </div>
          <div className="aboutProject">
            <b className='clientName'>ETMS</b>
            <div className="projectDescription">
              The application I worked on is a ticketing tool that allows users to create tickets and track their status. To facilitate easy access and monitoring of tickets, I implemented a log summary page utilizing D3JS. This page provides a comprehensive view of the activities performed on each ticket, including details such as the state, status, and comments associated with the ticket. This feature enhances transparency and enables users to stay updated on the progress and history of their tickets. By incorporating D3JS, the log summary page offers a visually appealing and interactive representation of ticket-related information, enhancing the overall user experience.            </div>
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
      <div class="project3">
        <div class="projectcontent3">
          <div className='logo3'>
            <span>10/2019 - 12/2020</span>
          </div>
          <div className="aboutProject">
            <b className='clientName'>Forensic Application("undisclosed")</b>
            <div className="projectDescription">
              Our application focuses on providing medical services by assisting in the evaluation of our clients' Universes. In this process, we intake up to 55 Universes created by our clients and apply a set of predefined business rules. These rules are designed to evaluate various aspects of the data, simulating how our clients would perform an actual audit. By automating this evaluation process, we aim to streamline and expedite the assessment of Universes, ensuring accuracy and consistency in data analysis. Our application enables efficient decision-making and supports our clients in their auditing procedures.            </div>
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
      <div class="project4">
        <div class="projectcontent4">
          <div className='logo4'>
            <span>09/2017 - 10/2019</span>
          </div>
          <div className="aboutProject">
            <b className='clientName'>Smart People Management(SPM)</b>
            <div className="projectDescription">
              SPM is a comprehensive HR solution designed to address the pressing challenges encountered by HR teams in organizations. It encompasses essential modules such as Payroll, Compensation Planning, Orgchart, Time Tracking System, Performance Management, Learning Management, Report designer and viewer, Employee benefits management, Employee onboarding, and Chatbot. The mobile application empowers end users with features like leave application and approval, pay slip downloads, and timesheet filling. With SPM, organizations can effectively streamline HR processes, enhance employee experience, and ensure seamless management of critical HR functions, providing a comprehensive solution to meet the evolving needs of modern HR teams.            </div>
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

export default Projects;