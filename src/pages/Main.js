import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useInView } from "react-intersection-observer";
import HeroSection from "../components/Home/HeroSection";
import NavbarTop from "../components/NavbarTop";

const Container = styled.div`
  height: 500vh;
  position: relative;
`;

function Main() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <Container>
      <NavbarTop />
      <Navbar inView={inView} />
      <HeroSection ref={ref} inView={inView} />
    </Container>
  );
}

export default Main;
