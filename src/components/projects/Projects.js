import React from "react";
import "./projects.css";
import { BsGithub } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import Project4 from "../../assets/project4.png";
import FRIENDER from "../../assets/FRIENDER.gif";
import Project5 from "../../assets/project5.gif";

function Projects() {
  return (
    <section id="projects">
      <h1 className="heading">RECENT WORK</h1>
      <div className="projectsContainer">
        {/* FULL STACK REACT SOCIAL MEDIA APPLICATION */}
        <div
          className=" card div"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <div className="cardHead">
            <div className="imageContainer">
              <img src={FRIENDER} alt="Project Management Application"></img>
            </div>
            <div className="projectText">
              <div className="text">
                <h4 className="center">
                  Full-Stack React Social Media Application
                </h4>
                <br />
                <h6 className="center">
                  React - HTML/CSS - MongoDB - ExpressJS - Apollo Cloud Server -
                  Mongoose - FakerJS
                </h6>
                <br />
                <h6 className="center">
                  Experience with MERN stack development (MongoDB, Express,
                  React and Node).
                  <br />
                  <br />
                  Experience in ReactJS framework and knowledge in developing
                  single-page applications (SPA).
                  <br />
                  <br />
                  Familiar with creating custom reusable React Components.
                </h6>
              </div>
              <div className="cardLinks">
                <button className="btn-grad">
                  <a
                    href="https://github.com/dugan-jo/Full-Stack-Social-Media-Application"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub size={15} />
                    <h6>CODE</h6>
                  </a>
                </button>
                <button className="btn-grad">
                  <a
                    href="https://friender-social-media.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiComputerLine size={15} />
                    <h6>Website</h6>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FULL STACK HANDLEBARS PROJECT MANAGEMENT APPLICATION */}
        <div
          className=" card div"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <div className="cardHead">
            <div className="imageContainer">
              <img src={Project4} alt="Project Management Application"></img>
            </div>
            <div className="projectText">
              <div className="text">
                <h4 className="center">
                  Full-Stack Project Management Application
                </h4>
                <br />
                <h6 className="center">
                  Handlebars - HTML/CSS - JavaScript - ExpressJS - MySQL
                  Workbench - Insomnia - Bootstrap
                </h6>
                <br />
                <h6 className="center">
                  Designed and built a full-stack Project Management Application
                  using the MVC paradigm, created a server-side API, user
                  authentication and connected Database.
                </h6>
              </div>
              <div className="cardLinks">
                <button className="btn-grad">
                  <a
                    href="https://github.com/dugan-jo/Full-Stack-Project-Management-Application"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub size={15} />
                    <h6>CODE</h6>
                  </a>
                </button>
                <button className="btn-grad">
                  <a
                    href="http://hidden-forest-18193.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiComputerLine size={15} />
                    <h6>Website</h6>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className=" card div"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <div className="cardHead">
            <div className="imageContainer">
              <img src={FRIENDER} alt="Project Management Application"></img>
            </div>
            <div className="projectText">
              <div className="text">
                <h4 className="center">Front-End Music Application</h4>
                <br />
                <h6 className="center">
                  ShazamAPI - YouTubeAPI - HTML/CSS - JavaScript - Query -
                  iFrame - Bootstrap
                </h6>
                <br />
                <h6 className="center">
                  Conceived and executed a front-end music application by
                  integrating data received from multiple server-side API
                  requests.
                  <br />
                  <br />
                  Experience working with third party web service API’s (REST)
                  and Web Services using JQuery Experience in Object Oriented
                  Concepts and JavaScript Programming Knowledge of Responsive
                  Web Design, checking for mobile compatibility.
                  <br />
                  <br />
                  Good Understanding of Document Object Model (DOM) and DOM
                  compatibility. Implemented easy to use Bootstrap buttons,
                  forms and carousel.
                </h6>
              </div>
              <div className="cardLinks">
                <button className="btn-grad">
                  <a
                    href="https://github.com/dugan-jo/Front-End-Music-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub size={15} />
                    <h6>CODE</h6>
                  </a>
                </button>
                <button className="btn-grad">
                  <a
                    href="https://dugan-jo.github.io/Front-End-Music-App/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiComputerLine size={15} />
                    <h6>Website</h6>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BACKEND APPLICATION */}
        <div
          className=" card div"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <div className="cardHead">
            <div className="imageContainer">
              <img src={Project5} alt="Project Management Application"></img>
            </div>
            <div className="projectText">
              <div className="text">
                <h4 className="center">
                  Object-Relational Mapping (ORM): E-Commerce Back End
                </h4>
                <br />
                <h6 className="center">
                  JavaScript - API - ExpressJS - SQL - Sequelize - Workbench -
                  Insomnia
                </h6>
                <br />
                <h6 className="center">
                  Built a back end an e-commerce site. I configure a working
                  Express.js API and used Sequelize to interact with a MySQL
                  database.
                  <br />
                  <br />I used MySQL2 and Sequelize packages to connect the
                  Express.js API to a MySQL database and the dotenv package to
                  the environment variables to store sensitive data.
                </h6>
              </div>
              <div className="cardLinks">
                <button className="btn-grad">
                  <a
                    href="https://github.com/dugan-jo/E-Commerce_back-end_Database"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub size={15} />
                    <h6>CODE</h6>
                  </a>
                </button>
                <button className="btn-grad">
                  <a
                    href="https://drive.google.com/file/d/1L_nneG6_9gdllD9bv38S1y5dlFu8KJFU/view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiComputerLine size={15} />
                    <h6>Website</h6>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
