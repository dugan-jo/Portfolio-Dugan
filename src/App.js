import React from "react";
import Header from "./components/header/Header";

import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className="root">
      <Header />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
