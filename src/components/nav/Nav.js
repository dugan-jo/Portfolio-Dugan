import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        to="/"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        to="/projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <GrProjects />
      </a>
      <a
        to="/about"
        onClick={() => setActiveNav("#aboutMe")}
        className={activeNav === "#aboutMe" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        to="/contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdPermContactCalendar />
      </a>
    </nav>
  );
};

export default Nav;
