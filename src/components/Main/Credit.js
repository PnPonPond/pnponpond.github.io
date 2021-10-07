import React from "react";
import styled from "styled-components";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { motion } from "framer-motion";

const Container = styled.div`
  max-width: 100vw;
  position: relative;
  min-height: 20vh;
  display: flex;
  padding: 0 10%;
  justify-content: space-between;
  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
  }
  align-items: center;
  background-color: #a8acb1;
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

const Box = styled.div`
  padding: 5% 0;
`;

const List = styled.ul`
  list-style-type: none;
`;

const Li = styled.li`
  font-size: 10px;
`;

const Link = styled.a``;

function Credit() {
  return (
    <Container>
      <Box>
        <h5>My resource</h5>
        <List>
          <Li>
            Animate text shadow -{" "}
            <Link href="https://codepen.io/carpenumidium" target="_blank">
              @carpenumidium
            </Link>
          </Li>
          <Li>
            Lego background -{" "}
            <Link href="https://unsplash.com/@omaralbeik" target="_blank">
              @omaralbeik
            </Link>
          </Li>
          <Li>
            Icon made by{" "}
            <Link
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
            >
              Freepik
            </Link>{" "}
            from{" "}
            <Link href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </Link>
          </Li>
          <Li>
            Mountain Dusk Parallax background -{" "}
            <Link
              href="https://ansimuz.itch.io/mountain-dusk-parallax-background"
              target="_blank"
            >
              @ansimuz
            </Link>
          </Li>
        </List>
      </Box>

      <Icons>
        <IconLink
          href="https://github.com/PnPonPond/"
          target="_blank"
          inputColor="#eb1d1d"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <FaGithub size="2.5em" />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/chanyanuch-oranthavornkul-6a6a74176/"
          target="_blank"
          inputColor="#f49d37"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <FaLinkedin size="2.5em" />
        </IconLink>
        <IconLink
          href="https://www.facebook.com/PonP0nd/"
          target="_blank"
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
