import React, { useEffect } from "react";
import styled from "styled-components";
import Description from "./components/Description";
import GlobalStyles from "./components/GlobalStyles";
import Introduction from "./components/Introduction";
import LowBar from "./components/LowBar";
import LanguageSwitchNav from "./components/Nav";
import Projects from "./components/Projects";
import SingleProject from "./components/SingleProject";
import { useAppContext } from "./context/appContext";
import useOnScreen from "./custom-hooks/useOnScreen";
import { PROJECTS } from "./data/projects";
import i18n from "i18next";
import { PROJECTS_FR } from "./data/projectsFR";
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation();
  const ref = React.useRef();
  const isVisible = useOnScreen(ref);
  const appState = useAppContext();
  if (isVisible) {
    appState.handleState(true);
  } else {
    appState.handleState(false);
  }
  useEffect(() => {
    console.log(i18n.language);
  }, [i18n]);
  return (
    <>
      <GlobalStyles />
      <LanguageSwitchNav />
      <Introduction />
      <div ref={ref}>
        <LowBar />
        <Description />
        <Projects />
        {i18n.language === "en"
          ? PROJECTS.map((project) => {
              return <SingleProject project={project} />;
            })
          : PROJECTS_FR.map((project) => {
              return <SingleProject project={project} />;
            })}
      </div>
    </>
  );
};

export default App;
