import { motion, useViewportScroll, useTransform } from "framer-motion";
import React, { useState, useCallback } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background-color: #f4f3ee;
  padding: 5% 10% 0 10%;
`;

const ImgForeground = styled(motion.img)`
  width: 120%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ImgMountain = styled(motion.img)`
  width: 130%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ImgTrees = styled(motion.img)`
  width: 120%;
  position: absolute;
  bottom: -30px;
  left: 0;
`;

const Frame = styled.div`
  width: 100%;
  height: 200px;
  @media (max-width: 1024px) {
    height: 150px;
  }
  @media (max-width: 768px) {
    height: 120px;
  }
  @media (max-width: 425px) {
    height: 70px;
  }
  position: relative;
  overflow: hidden;
`;
function MountainView() {
  const [top, setTop] = useState(0);
  const setRef = useCallback((node) => {
    if (node) {
      setTop(node.offsetTop);
    }
  }, []);
  const { scrollY } = useViewportScroll();
  const x1 = useTransform(scrollY, [top - 400, top + 300], [0, -100]);
  const x2 = useTransform(scrollY, [top - 400, top + 300], [0, -200]);
  const x3 = useTransform(scrollY, [top - 400, top + 300], [0, -250]);
  return (
    <Container ref={setRef} id="about">
      <Frame>
        <ImgMountain src="/img/mountain.png" alt="" style={{ x: x1 }} />
        <ImgTrees src="/img/trees.png" alt="" style={{ x: x2 }} />
        <ImgForeground src="/img/foreground.png" alt="" style={{ x: x3 }} />
      </Frame>
    </Container>
  );
}

export default MountainView;
