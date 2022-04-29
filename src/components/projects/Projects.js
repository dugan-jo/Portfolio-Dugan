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
            <div className="image">
              <img src={FRIENDER} alt="Project Management Application"></img>
            </div>
            <div className="projectText">
              <h2>Full-Stack React Social Media Application</h2>
              <h5>
                React <br />
                CSS3 <br />
                MongoDB <br />
                Atlas <br />
                Atlas <br />
              </h5>
            </div>
          </div>

          <div className="cardLinks">
            <div className="links">
              <a
                href="https://github.com/dugan-jo/Project_Tracker"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub size={30} />
              </a>
              GitHub
            </div>
            <div className="links">
              <a
                href="http://hidden-forest-18193.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <RiComputerLine size={30} />
              </a>
              Website
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
            <div className="image">
              <img src={Project4} alt="Project Management Application"></img>
            </div>
            <div className="projectText">
              <h2>Full-Stack Handlebars Project Management Application</h2>
              <h5>
                React <br />
                MongoDB <br />
                Atlas
              </h5>
            </div>
          </div>

          <div className="cardLinks">
            <div className="links">
              <a
                href="https://github.com/dugan-jo/Project_Tracker"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub size={30} />
              </a>
              GitHub
            </div>
            <div className="links">
              <a
                href="http://hidden-forest-18193.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <RiComputerLine size={30} />
              </a>
              Website
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
            <div className="image">
              <img src={Project5} alt="Project Management Application"></img>
            </div>
            <div className="projectText">
              <h2>Backend Application</h2>
              <h5>
                React <br />
                MongoDB <br />
                Atlas
              </h5>
            </div>
          </div>

          <div className="cardLinks">
            <div className="links">
              <a
                href="https://github.com/dugan-jo/Project_Tracker"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub size={30} />
              </a>
              GitHub
            </div>
            <div className="links">
              <a
                href="http://hidden-forest-18193.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <RiComputerLine size={30} />
              </a>
              Website
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
