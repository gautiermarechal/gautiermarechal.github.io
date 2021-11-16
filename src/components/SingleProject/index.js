import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import SnippetSrc from "../../images/CTD-Snippet.png";
import ScrollAnimation from "react-animate-on-scroll";

const SingleProject = ({ project }) => {
  const [imageSrc, setImageSrc] = useState();
  useEffect(() => {
    setImageSrc(project.thumbnail);
  }, []);
  return (
    <>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
        <Container>
          <Content>
            <HeaderContainer>
              <Title href={project.link} target="_blank">
                {project.title}
              </Title>
              <Date>{project.date}</Date>
            </HeaderContainer>

            <LinksContainer>
              <SubTitle href={project.demo} target="_blank">
                Demo
              </SubTitle>
              <Line />
              <SubTitle href={project.github} target="_blank">
                Github
              </SubTitle>
            </LinksContainer>
            <Description>{project.description}</Description>
            <ProjectSnippet
              src={require(`../../images/${project.thumbnail}`)}
              alt={"image"}
            />
          </Content>
        </Container>
        <SeparateLineContainer>
          <SeparateLine />
        </SeparateLineContainer>
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
  @media (max-width: 820px) {
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;

  @media (max-width: 810px) {
    margin: 30px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Date = styled.p`
  color: ${COLORS.pacificBlue};
`;

const Title = styled.a`
  font-size: 40px;
  margin-bottom: 10px;
  cursor: pointer;
  width: fit-content;
  padding: 10px 10px 10px 0px;
  border-bottom: solid transparent 4px;
  transition: 0.5s;
  &:hover {
    border-bottom: solid ${COLORS.red} 4px;
  }
`;

const Line = styled.hr`
  width: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${COLORS.red};
  margin: 0px;
  margin-right: 10px;
  margin-bottom: 5px;
`;

const SeparateLineContainer = styled.div`
  display: none;
  width: 100%;
  justify-content: center;
  @media (max-width: 820px) {
    display: flex;
  }
`;

const SeparateLine = styled.hr`
  width: 80%;
  border-width: 1px;
  border-style: solid;
  border-color: ${COLORS.red};
  margin: 0px;
  margin-top: 70px;
`;

const SubTitle = styled.a`
  border-bottom: solid transparent 3px;
  transition: 0.5s;
  width: fit-content;
  padding-bottom: 3px;
  &:hover {
    border-bottom: solid ${COLORS.red} 3px;
  }
  margin-right: 10px;
`;

const Description = styled.p`
  width: 80%;
  line-height: 1.5;
`;

const ProjectSnippet = styled.img`
  width: 100%;
  border: none;
  margin-top: 20px;
  border-radius: 7px;
`;

export default SingleProject;
