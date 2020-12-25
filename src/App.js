import React from "react";
import styled from "styled-components";
import Description from "./components/Description";
import GlobalStyles from "./components/GlobalStyles";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import SingleProject from "./components/SingleProject";
import { PROJECTS } from "./data/projects";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Introduction />
      <Description />
      <Projects />
      {PROJECTS.map((project) => {
        return <SingleProject project={project} />;
      })}
    </>
  );
};

export default App;
