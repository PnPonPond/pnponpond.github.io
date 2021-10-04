import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { projects } from "./Projects";

const Container = styled.div`
  position: relative;
  padding: 4rem 8rem;
  background-color: #f4f3ee;
`;

const Title = styled(motion.h1)`
  color: #3f88c5;
  text-align: left;
  margin-bottom: 2rem;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  padding: 20px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled(motion.img)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
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

const ImgAnimation = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.1,
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
      <CardWrapper>
        {projects.map((project) => {
          return (
            <CardItems
              initial="rest"
              whileHover="hover"
              animate="rest"
              href={project.url}
              target="_blank"
            >
              <Img
                src={project.imageUrl}
                alt={`${project.name}-img`}
                variants={ImgAnimation}
              />
              <Overlay variants={TitleAnimation}>{project.name}</Overlay>
            </CardItems>
          );
        })}
      </CardWrapper>
    </Container>
  );
}

export default Project;
