import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { projects } from "./Projects";

const Container = styled.div`
  position: relative;
  padding: 4rem 8rem;
  @media (max-width: 768px) {
    padding: 1rem 10%;
  }
  background-color: #f4f3ee;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled(motion.h1)`
  color: #3f88c5;
  text-align: left;
  margin: 2rem 0;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 2rem;
  @media (max-width: 425px) {
    grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
    grid-gap: 1rem;
  }
`;

const CardItems = styled(motion.a)`
  background-color: white;
  height: 300px;
  @media (max-width: 640px) {
    height: 206.25px;
  }
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
  height: 100%;
  background-color: #000000bc;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled(motion.img)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 70px;
  flex-direction: column;
`;

const ProjectName = styled.h2`
  position: relative;
  font-weight: 700;
  z-index: 2;
`;

const colors = ["#eb1d1d", "#f49d37", "#3f88c5"];

const Line = styled(motion.div)`
  position: relative;
  height: 10px;
  margin-bottom: 20px;
  margin-left: -8px;
  margin-top: -15px;
  background-color: ${(props) =>
    props.index ? colors[props.index] : "#eb1d1d"};
  opacity: 0.9;
  z-index: 1;
`;

const TitleAnimation = {
  rest: {
    opacity: 0,
    y: "-100%",
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

const LineAnimation = {
  rest: {
    width: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
  hover: {
    width: "60%",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
};

const Button = styled.a`
  margin-top: 40px;
  align-self: center;
  width: 200px;
  background-color: transparent;
  border-radius: 12px;
  box-sizing: border-box;
  color: #3f88c5;
  cursor: pointer;
  display: inline-flex;
  font-family: Kanit, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  box-shadow: #3f88c5 0 0 0 3px, transparent 0 0 0 0;

  :hover {
    box-shadow: black 0 0 0 3px, transparent 0 0 0 0;
    background-color: black;
    color: white;
  }
`;

function Project() {
  return (
    <Container id="project">
      <Title>Projects</Title>
      <CardWrapper>
        {projects.map((project, i) => {
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
              <Overlay variants={TitleAnimation}>
                <ProjectContainer>
                  <ProjectName>{project.name}</ProjectName>
                  <Line variants={LineAnimation} index={i % 3} />
                  {project.desc}
                </ProjectContainer>
              </Overlay>
            </CardItems>
          );
        })}
      </CardWrapper>
      <Button href="https://github.com/PnPonPond/" target="_blank">
        Show me more
      </Button>
    </Container>
  );
}

export default Project;
