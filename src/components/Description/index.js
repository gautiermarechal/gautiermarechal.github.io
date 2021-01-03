import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const Description = () => {
  return (
    <>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
        <Container>
          <Content>
            <Title>Who am I?</Title>
            <Text>
              I am a passionate of creating. Recently graduated from university,
              I decided to pursue a web development bootcamp to solidify my
              skills. Now I use software development to fulfill my interest in
              building things.
            </Text>
            <Text>
              In my free time, I like to read books, build personal projects and
              play basketball!📚 ⚡️ 🏀
            </Text>
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
