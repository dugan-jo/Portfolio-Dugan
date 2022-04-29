import React from "react";
import "./contact.css";
import { VscGithubInverted } from "react-icons/vsc";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoDocumentAttach } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contact">
      <div className="icons emulated-flex-gap">
        <div className="iconNames">
          <a
            href="https://www.github.com/dugan-jo"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithubInverted size={20} />
            <h6>GitHub</h6>
          </a>
        </div>
        <div className="iconNames">
          <a
            href="https://www.linkedin.com/in/dugan-jo"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin size={20} />
          </a>
          <h6>LinkedIn</h6>
        </div>
        <div className="iconNames">
          <a
            href="mailto:joseph.michael.dugan@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdEmail size={20} />
          </a>
          <h6>Email</h6>
        </div>
        <div className="iconNames">
          <a
            href="mailto:joseph.michael.dugan@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <IoDocumentAttach size={20} />
          </a>
          <h6>Resume</h6>
        </div>
        <div className="iconNames">
          <a
            href="mailto:joseph.michael.dugan@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <BsFillTelephoneForwardFill size={20} />
          </a>
          <h6>720-607-8306</h6>
        </div>
      </div>
    </section>
  );
};

export default Contact;
