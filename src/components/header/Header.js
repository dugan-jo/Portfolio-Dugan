import React from "react";
import "./header.css";
// import HeaderButtons from "./HeaderButtons";
import ME from "../../assets/JosephDugan.PNG";

const Header = () => {
  return (
    <>
      <header>
        <div id="home" className="container headerContainer">
          <h5>HELLO I AM</h5>
          <h1 className="color-30">JOSEPH DUGAN</h1>
          <br />
          <h3>React | MongoDB | HTML/CSS | Javascript | ExpressJS | NodeJS</h3>
          <div>contact info</div>
        </div>
      </header>
    </>
  );
};

export default Header;
