import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  return (
    <>
      <ScrollAnimation animateIn="fadeInLeft">
        <Container>
          <Content>
            <Title>Projects</Title>
          </Content>
        </Container>
      </ScrollAnimation>
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 10vh;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
`;

const Title = styled.h1`
  font-size: 60px;
`;

export default Projects;
