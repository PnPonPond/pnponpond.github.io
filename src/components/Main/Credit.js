import React from "react";
import styled from "styled-components";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { motion } from "framer-motion";

const Container = styled.div`
  position: relative;
  min-height: 20vh;
  display: flex;
  padding: 0 50px;
  justify-content: space-between;
  align-items: center;
  background-color: #a8acb1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconLink = styled(motion.a)`
  padding: 0 5px;
  text-decoration: none;
  color: white;
  &:hover {
    color: ${(props) => (props.inputColor ? props.inputColor : "black")};
  }
`;

function Credit() {
  return (
    <Container>
      <div />
      <Icons>
        <IconLink
          to="/"
          inputColor="#eb1d1d"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <FaGithub size="2.5em" />
        </IconLink>
        <IconLink
          to="/"
          inputColor="#f49d37"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <FaLinkedin size="2.5em" />
        </IconLink>
        <IconLink
          to="/"
          inputColor="#3f88c5"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <FaFacebook size="2.5em" />
        </IconLink>
      </Icons>
    </Container>
  );
}

export default Credit;
