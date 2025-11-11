import React from "react";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Adventures from "./components/Adventures";
import Project from "./components/Project";
import Servises from "./components/Servises";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Adventures />
      <Project />
      <Servises />
    </div>
  );
};

export default App;
