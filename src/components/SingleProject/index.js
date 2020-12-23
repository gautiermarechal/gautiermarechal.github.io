import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import SnippetSrc from "../../images/CTD-Snippet.png";
import ScrollAnimation from "react-animate-on-scroll";

const SingleProject = () => {
  return (
    <>
      <ScrollAnimation animateIn="fadeInLeft">
        <Container>
          <Content>
            <Title>Connect the dots</Title>
            <SubTitle href="https://www.youtube.com/watch?v=jYNo8yybQCk&ab_channel=GautierMarechal">
              Demo
            </SubTitle>
            <Description>
              This website is a tool that allows people to connect concepts of a
              book to any concepts of any other book. By creating this project,
              my will was to facilitate the process of joining ideas together
              when reading books.
            </Description>
            <ProjectSnippet src={SnippetSrc} />
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
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
`;

const Title = styled.h1`
  cursor: pointer;
  width: fit-content;
  padding: 10px 10px 10px 0px;
  border-bottom: solid transparent 3px;
  transition: 0.5s;
  &:hover {
    border-bottom: solid ${COLORS.red} 3px;
  }
`;

const SubTitle = styled.a`
  border-bottom: solid transparent 3px;
  transition: 0.5s;
  width: fit-content;
  padding-bottom: 3px;
  &:hover {
    border-bottom: solid ${COLORS.red} 3px;
  }
`;

const Description = styled.p`
  width: 80%;
  line-height: 1.5;
`;

const ProjectSnippet = styled.img`
  width: 100%;
  border: none;
  margin-top: 20px;
`;

export default SingleProject;
