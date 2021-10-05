import { motion } from "framer-motion";
import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  margin-top: ${(props) => (props.inView ? "-8vh" : "0")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("/img/Bg1.jpg");
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Backdrop = styled.div`
  background-color: #000000c1;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const move = keyframes`
  0% {background-position: 0 0}
  0% {background-position: 100% -100%}
`;

const Title = styled.h1`
  position: relative;
  font-size: 3em;
  @media (min-width: 768px) {
    font-size: 5.5em;
  }
  @media (min-width: 1024px) {
    font-size: 8em;
  }
  line-height: 1;
  margin-top: 0.2rem;
  text-transform: capitalize;
  color: white;
  z-index: 5;
  text-shadow: 0.03em 0.03em 0 #000000c1;
  &::after {
    content: attr(data-shadow);
    position: absolute;
    top: 0.06em;
    left: 0.06em;
    z-index: -1;
    text-shadow: none;
    background-image: linear-gradient(
      45deg,
      transparent 45%,
      hsla(48, 20%, 90%, 1) 45%,
      hsla(48, 20%, 90%, 1) 55%,
      transparent 0
    );
    background-size: 0.05em 0.05em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${move} 40s linear infinite;
  }
`;

const TextSection = styled(motion.div)`
  display: flex;
  z-index: 2;
  align-items: center;
  flex-direction: column;
`;

const HeroSection = React.forwardRef(({ inView }, ref) => {
  return (
    <Container ref={ref} inView={inView}>
      <Backdrop />
      <TextSection
        inView={inView}
        initial={{ y: "-90%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ type: "easeIn", duration: 0.75 }}
      >
        <Title data-shadow="Chanyanuch">Chanyanuch</Title>
        <Title data-shadow="Oranthavornkul">Oranthavornkul</Title>
      </TextSection>
    </Container>
  );
});

export default HeroSection;
