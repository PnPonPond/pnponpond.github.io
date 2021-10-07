import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Nav = styled(motion.nav)`
  padding: 0 2rem;
  width: 100vw;
  min-height: 8vh;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 425px) {
    justify-content: center;
  }
  align-items: center;
  background-color: transparent;
  position: absolute;
  z-index: 1000;
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
  transition: text-decoration 1s ease-in-out;
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

function NavbarTop() {
  return (
    <Nav>
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

export default NavbarTop;
