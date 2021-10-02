import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProgressiveImage } from "react-progressive-image";
import { motion } from "framer-motion";

const Container = styled.div`
  position: relative;
  background-color: pink;
  min-height: 100vh;
  margin-top: ${(props) => (props.inView ? "-8vh" : "0")};
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url("/img/Bg1.jpg"); */
  background-color: yellow;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Img = styled(motion.img)`
  width: 500px;
  height: auto;
`;

function Home() {
  return (
    <Container>
      <Link to="/model">
        <ProgressiveImage src="/img/Bg1.jpg" alt="image">
          {(src) => (
            <Img whileHover={{ scale: 1.1 }} src={src} alt="an image" />
          )}
        </ProgressiveImage>
      </Link>
    </Container>
  );
}

export default Home;
