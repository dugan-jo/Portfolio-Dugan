import React from "react";
import "./header.css";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiHeroku } from "react-icons/si";

import Contact from "../contact/Contact";

const Header = () => {
  return (
    <>
      <header>
        <div className="backgroundImage">
          <div id="home" className="headerContainer">
            <h1>JOSEPH DUGAN</h1>
            <br />
            <h5>Full-Stack Software Engineer</h5>
            <Contact />
          </div>
        </div>
      </header>
      <badges className="badges">
        <div className="badgesContainer">
          <div className="badgeCard">
            <article class="badge blue">
              <div class="rounded">
                <FaReact size={30} />
              </div>
            </article>
            <h6>React</h6>
          </div>
          <div className="badgeCard">
            <article class="badge green">
              <div class="rounded">
                <SiMongodb size={30} />
              </div>
            </article>
            <h6>MongoDB</h6>
          </div>
          <div className="badgeCard">
            <article class="badge gainsboro">
              <div class="rounded">
                <AiFillHtml5 size={30} />
              </div>
            </article>
            <h6>HTML5</h6>
          </div>
          <div className="badgeCard">
            <article class="badge crimson">
              <div class="rounded">
                <IoLogoCss3 size={30} />
              </div>
            </article>
            <h6>CSS3</h6>
          </div>
          <div className="badgeCard">
            <article class="badge orange">
              <div class="rounded">
                <SiJavascript size={30} />
              </div>
            </article>
            <h6>JavaScript</h6>
          </div>
          <div className="badgeCard">
            <article class="badge green">
              <div class="rounded">
                <FaNode size={30} />
              </div>
            </article>
            <h6>NodeJS</h6>
          </div>
          <div className="badgeCard">
            <article class="badge purple">
              <div class="rounded">
                <SiHeroku size={30} />
              </div>
            </article>
            <h6>Heroku</h6>
          </div>
        </div>
      </badges>
    </>
  );
};

export default Header;
