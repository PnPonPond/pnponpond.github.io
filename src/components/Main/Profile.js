import { motion, useViewportScroll, useTransform } from "framer-motion";
import React, { useState, useCallback } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  min-height: 110vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #f4f3ee;
  padding: 4rem 10%;
  @media (max-width: 768px) {
    padding: 1rem 10%;
  }
`;

const Title = styled(motion.h1)`
  color: #f49d37;
  text-align: left;
  margin: 2rem 0;
`;

const Flex = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

const Text = styled(motion.div)`
  flex: 1;
`;

const ImgBG = styled.img`
  width: 100%;
`;

const ImgForeground = styled(motion.img)`
  width: 180%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ImgMountain = styled(motion.img)`
  width: 180%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ImgTrees = styled(motion.img)`
  width: 180%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ImgMountainFar = styled(motion.img)`
  width: 110%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Frame = styled.div`
  width: 100%;
  padding: 1.5rem;
  border: #4b3869 dashed 4px;
  position: relative;
  flex: 1;
  overflow: hidden;
`;

function Profile() {
  const [top, setTop] = useState(0);

  const setRef = useCallback((node) => {
    if (node) {
      setTop(node.offsetTop);
    }
  }, []);
  const { scrollY } = useViewportScroll();
  const x1 = useTransform(scrollY, [top - 200, top + 300], [0, -100]);
  const x2 = useTransform(scrollY, [top - 200, top + 300], [0, -200]);
  const x3 = useTransform(scrollY, [top - 200, top + 300], [0, -250]);
  const x4 = useTransform(scrollY, [top - 200, top + 300], [0, -20]);
  return (
    <Container id="about" ref={setRef}>
      <Title>About me</Title>
      <Flex>
        <Frame>
          <ImgBG src="/img/bg.png" alt="" />
          <ImgMountainFar src="/img/mountainFar.png" alt="" style={{ x: x4 }} />
          <ImgMountain src="/img/mountain.png" alt="" style={{ x: x1 }} />
          <ImgTrees src="/img/trees.png" alt="" style={{ x: x2 }} />
          <ImgForeground src="/img/foreground.png" alt="" style={{ x: x3 }} />
        </Frame>
        <Text>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
            nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quis, nostrum. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quisquam assumenda voluptatem error vel ut libero dolor
            voluptas excepturi iste fugit?
          </p>
        </Text>
      </Flex>
    </Container>
  );
}

export default Profile;
