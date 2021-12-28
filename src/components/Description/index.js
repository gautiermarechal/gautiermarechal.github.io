import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation();
  return (
    <>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
        <Container>
          <Content>
            <Title>{t("description.who")}</Title>
            <Text>{t("description.text0")}</Text>
            <Text>{t("description.text1")}</Text>
          </Content>
        </Container>
      </ScrollAnimation>
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  @media (max-width: 750px) {
    height: 80vh;
  }
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  @media (max-width: 750px) {
    margin: 0px 50px 50px 50px;
  }
  @media (max-width: 450px) {
    p {
      font-size: 5vw;
    }
    h1 {
      font-size: 12vw;
    }
  }
`;

const Text = styled.p`
  margin-top: 20px;
  font-size: 30px;
`;

const Title = styled.h1``;

export default Description;
