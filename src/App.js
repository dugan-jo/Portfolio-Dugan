import React from "react";
import Header from "./components/header/Header";

import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div className="root">
      <Header />
      <Projects />
    </div>
  );
};

export default App;
