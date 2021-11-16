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
              I am a passionate of creating. Software development has been a
              great way to fulfill this passion since 1 and a half years.
            </Text>
            <Text>
              I am also a huge fan of <strong>Bitcoin</strong> and currently
              learning <strong>Lightning Network</strong> development ⚡️. My
              free time also goes to Arduino and woodworking!
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
