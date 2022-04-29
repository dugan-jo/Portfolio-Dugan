import React from "react";
import "./projects.css";
import { BsGithub } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import Project4 from "../../assets/project4.png";

function Projects() {
  return (
    <section id="projects">
      <h1>RECENT WORK</h1>
      <div className="projectsContainer">
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
              <h2>Project Tracker</h2>
              <h5>
                Handlebars <br />
                JavaScript <br />
                mongoDB
              </h5>
            </div>
          </div>

          <div className="cardLinks">
            <a
              href="https://github.com/dugan-jo/Project_Tracker"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={30} />
            </a>
            <a
              href="http://hidden-forest-18193.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <RiComputerLine size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
