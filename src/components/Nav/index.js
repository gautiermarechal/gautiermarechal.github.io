import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { COLORS } from "../../constants/colors";

const LanguageSwitchNav = () => {
  const { i18n } = useTranslation();
  function changeLanguage(e) {
    i18n.changeLanguage(e);
  }
  return (
    <Container>
      <LanguageSwitcher
        onClick={() => changeLanguage(i18n.language === "en" ? "fr" : "en")}
      >
        {i18n.language === "en" ? <>FR</> : <>EN</>}
      </LanguageSwitcher>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  position: fixed;
  height: 70px;
  z-index: 30;
`;

const LanguageSwitcher = styled.div`
  border-radius: 100%;
  height: 50px;
  width: 50px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: 0.2s;
  padding: 0px;
  svg {
    height: 30px;
    width: 30px;
  }

  &:hover {
    background-color: ${COLORS.darkBlue};
    svg {
      fill: white;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white;
  }
  margin: 20px;
`;

export default LanguageSwitchNav;
