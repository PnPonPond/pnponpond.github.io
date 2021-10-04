import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { projects } from "./Projects";

const Container = styled.div`
  position: relative;
  /* min-height: 110vh; */
  background-color: #f2f2f2;
`;

const Title = styled(motion.h1)`
  color: white;
  padding-top: 50px;
  text-align: left;
`;

const CardWarpper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 50px 10%;
  grid-gap: 2rem;
`;

const CardItems = styled(motion.a)`
  background-color: white;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
  background-image: url("/img/Bg1.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 20%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleAnimation = {
  rest: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

function Project() {
  return (
    <Container>
      <Title>Projects</Title>
      <CardWarpper>
        <CardItems initial="rest" whileHover="hover" animate="rest" >
          <Overlay variants={TitleAnimation}>AAA</Overlay>
        </CardItems>
      </CardWarpper>
    </Container>
  );
}

export default Project;
