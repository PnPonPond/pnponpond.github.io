import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Nav = styled(motion.nav)`
  top: 0;
  left: 0;
  padding: 0 2rem;
  width: 100vw;
  background-color: ${(props) => (props.inView ? "transparent" : "black")};
  position: ${(props) => (props.inView ? "none" : "fixed")};
  display: ${(props) => (props.inView ? "none" : "flex")};
  justify-content: flex-end;
  @media (max-width: 425px) {
    justify-content: center;
  }
  align-items: center;
  z-index: 999;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.inputcolor ? props.inputcolor : "black")};
  transition: text-decoration 0.5s ease-in-out;
  font-weight: 700;
  &::after {
    margin-top: 2px;
    content: "";
    height: 2px;
    width: 0;
    background-color: ${(props) =>
      props.inputcolor ? props.inputcolor : "black"};
    display: block;
    transition: width 0.5s ease-in-out;
  }
  &:hover::after {
    transform: width;
    width: 100%;
  }
`;

const navbarAnimatiom = {
  down: {
    y: "-100%",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  show: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  init: {},
};

function Navbar({ inView }) {
  return (
    <Nav
      inView={inView}
      animate={inView ? "down" : "show"}
      initial={"init"}
      variants={navbarAnimatiom}
    >
      <Menu>
        <MenuLink inputcolor="#eb1d1d" to="home" smooth={true}>
          Home
        </MenuLink>
        <MenuLink inputcolor="#f49d37" to="about" smooth={true}>
          About
        </MenuLink>
        <MenuLink inputcolor="#3f88c5" to="project" smooth={true}>
          Project
        </MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar;
