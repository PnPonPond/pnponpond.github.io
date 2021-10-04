import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useInView } from "react-intersection-observer";
import HeroSection from "../components/Main/HeroSection";
import NavbarTop from "../components/NavbarTop";
import Credit from "../components/Main/Credit";
import Profile from "../components/Main/Profile";
import Project from "../components/Main/Project";

const Container = styled.div`
  position: relative;
`;

function Main() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log(inView);
  return (
    <Container>
      <NavbarTop />
      <Navbar inView={inView} />
      <HeroSection ref={ref} inView={inView} />
      <Profile />
      <Project />
      <Credit />
    </Container>
  );
}

export default Main;
