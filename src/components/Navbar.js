import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = styled(motion.nav)`
  width: 100%;
  margin-top: -8vh;
  background-color: ${(props) => (props.inView ? "transparent" : "black")};
  position: ${(props) => (props.inView ? "none" : "fixed")};
  display: ${(props) => (props.inView ? "none" : "flex")};
  justify-content: flex-end;
  align-items: center;
  z-index: 999;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.inputColor ? props.inputColor : "black")};
  transition: text-decoration 1s ease-in-out;
  font-weight: 700;
  &::after {
    margin-top: 2px;
    content: "";
    height: 2px;
    width: 0;
    background-color: ${(props) =>
      props.inputColor ? props.inputColor : "black"};
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
  },
  show: {
    y: 0,
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
        <MenuLink inputColor="#eb1d1d" href="#">
          Home
        </MenuLink>
        <MenuLink inputColor="#f49d37" href="#">
          Profile
        </MenuLink>
        <MenuLink inputColor="#3f88c5" href="#">
          Project
        </MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar;
