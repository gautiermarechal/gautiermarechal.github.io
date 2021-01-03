import React from "react";
import styled from "styled-components";
import profilePicSrc from "../../images/profile_gaut.jpg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { COLORS } from "../../constants/colors";
import { useSpring, animated } from "react-spring";

const Introduction = () => {
  const animation = useSpring({
    transform: "translate3D(0,0,0)",
    opacity: 1,
    from: {
      transform: "translate3D(0,-50px,0)",
      opacity: 0,
    },
  });
  return (
    <>
      <Container style={animation}>
        <Content>
          <GreetingsContainer>
            <ProfilePicture src={profilePicSrc} />
            <Greetings>Bonjour, Hi!</Greetings>
          </GreetingsContainer>
          <Text>
            I'm Gautier, a recent Web Development Graduate, in love of building
            things, from software to electronics.
          </Text>
          <ActionBar>
            <IconButton>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/gautiermarechal/"
              >
                <AiFillLinkedin />
              </a>
            </IconButton>
            <IconButton>
              <a target="_blank" href="https://github.com/gautiermarechal">
                <AiFillGithub />
              </a>
            </IconButton>
          </ActionBar>
        </Content>
      </Container>
    </>
  );
};

const Container = styled(animated.div)`
  display: flex;
  width: 100vw;
  height: 101vh;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  @media (max-width: 750px) {
    margin: 50px;
  }
`;

const GreetingsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 80px;
`;

const Greetings = styled.h1`
  margin-left: 20px;
`;

const Text = styled.p`
  margin-top: 20px;
  font-size: 30px;
`;

const ActionBar = styled.div`
  display: flex;
`;

const IconButton = styled.button`
  background-color: none;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: 0.5s;
  margin-left: 10px;

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
`;

export default Introduction;
