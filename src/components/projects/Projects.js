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
              <h4>Full-Stack React Social Media Application</h4>
              <h6>
                React <br />
                CSS3 <br />
                MongoDB <br />
                Apollo GraphQL <br />
                JSON Web Tokens <br />
                bcrypt
              </h6>

              <div className="cardLinks">
                <button className="btn-grad">
                  <a
                    href="https://github.com/dugan-jo/Full-Stack-Social-Media-Application"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub size={15} />
                    <h6>GitHub</h6>
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
            <div className="image">
              <img src={Project4} alt="Project Management Application"></img>
            </div>
            <div className="projectText">
              <h4>Full-Stack Handlebars Project Management Application</h4>
              <h6>
                Handlebars <br />
                ExpressJS <br />
                MySQL Workbench <br />
                bcrypt
              </h6>

              <div className="cardLinks">
                <button className="btn-grad">
                  <a
                    href="https://github.com/dugan-jo/Full-Stack-Social-Media-Application"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub size={15} />
                    <h6>GitHub</h6>
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
              <h4>Object-Relational Mapping (ORM): E-Commerce Back End</h4>
              <h6>
                React <br />
                CSS3 <br />
                MongoDB <br />
                Apollo GraphQL <br />
                JSON Web Tokens <br />
                bcrypt
              </h6>

              <div className="cardLinks">
                <button className="btn-grad">
                  <a
                    href="https://github.com/dugan-jo/Full-Stack-Social-Media-Application"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub size={15} />
                    <h6>GitHub</h6>
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
      </div>
    </section>
  );
}

export default Projects;
