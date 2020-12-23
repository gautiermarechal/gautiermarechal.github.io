import React from "react";
import styled from "styled-components";
import Description from "./components/Description";
import GlobalStyles from "./components/GlobalStyles";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import SingleProject from "./components/SingleProject";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Introduction />
      <Description />
      <Projects />
      <SingleProject />
    </>
  );
};

export default App;
