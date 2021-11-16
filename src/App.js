import React from "react";
import styled from "styled-components";
import Description from "./components/Description";
import GlobalStyles from "./components/GlobalStyles";
import Introduction from "./components/Introduction";
import LowBar from "./components/LowBar";
import Projects from "./components/Projects";
import SingleProject from "./components/SingleProject";
import { useAppContext } from "./context/appContext";
import useOnScreen from "./custom-hooks/useOnScreen";
import { PROJECTS } from "./data/projects";

const App = () => {
  const ref = React.useRef();
  const isVisible = useOnScreen(ref);
  const appState = useAppContext();
  if (isVisible) {
    appState.handleState(true);
  } else {
    appState.handleState(false);
  }
  return (
    <>
      <GlobalStyles />
      <Introduction />
      <div ref={ref}>
        <LowBar />
        <Description />
        <Projects />
        {PROJECTS.map((project) => {
          return <SingleProject project={project} />;
        })}
      </div>
    </>
  );
};

export default App;
