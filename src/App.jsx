import React from "react";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Adventures from "./components/Adventures";
import Project from "./components/Project";
import Servises from "./components/Servises";
import Blogs from "./components/Blogs";
import Faq from "./components/Faq";
import Tellus from "./components/Tellus";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Adventures />
      <Project />
      <Servises />
      <Blogs />
      <Faq />
      <Tellus />
    </div>
  );
};

export default App;
