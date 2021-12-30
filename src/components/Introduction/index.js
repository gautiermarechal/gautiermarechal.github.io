import React from "react";
import styled from "styled-components";
import profilePicSrc from "../../images/profile_gaut.jpg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { COLORS } from "../../constants/colors";
import { useSpring, animated } from "react-spring";

const Introduction = () => {
  const { t } = useTranslation();
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
            <ImageContainer>
              <ProfilePicture src={profilePicSrc} />
            </ImageContainer>
            <Greetings>{t("introduction.hi")}</Greetings>
          </GreetingsContainer>
          <Text>{t("introduction.intro")} </Text>
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
            <IconButton>
              <a target="_blank" href="mailto:gautier.marechal@gaut.io">
                <MdEmail />
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
  flex-direction: column;
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

const ImageContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  border-radius: 100%;
`;

const ProfilePicture = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
  transform: scale(1.35);
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
  border-radius: 100%;
  height: 50px;
  width: 50px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: 0.5s;
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
`;

const LanguageSwitcher = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
`;

export default Introduction;
