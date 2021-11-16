import React from "react";
import styled, { keyframes } from "styled-components";
import { useAppContext } from "../../context/appContext";
import { COLORS } from "../../constants/colors";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useSpring, animated } from "react-spring";
import { lightSpeedIn } from "react-animations";

const LowBar = () => {
  const state = useAppContext();
  const MainContainer = styled(animated.div)`
    position: absolute;
    display: ${state.showLowerBar ? "flex" : "none"};
    justify-content: flex-end;
    width: 100%;
    bottom: 0;
    position: fixed;
    z-index: 999;
  `;
  const animation = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <>
      <MainContainer style={animation}>
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
            <a target="_blank" href="mailto:gaut.marechal@gmail.com">
              <MdEmail />
            </a>
          </IconButton>
        </ActionBar>
      </MainContainer>
    </>
  );
};

const animation = keyframes`${lightSpeedIn}`;

const ActionBar = styled.div`
  display: flex;
  margin-right: 20px;
  margin-bottom: 20px;
  animation: 1s ${animation};
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

export default LowBar;
