import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #f4f3ee;
  padding: 0 10% 4rem 10%;
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
  align-items: center;
  justify-content: space-evenly;
  /* padding: 0 10%; */
`;

const Text = styled(motion.div)`
  width: 50%;
`;

const Img = styled.img`
  width: 20%;
`;

function Profile() {
  return (
    <Container>
      <Title>About me</Title>
      <Flex>
        <Img src="/img/blogger.png" alt="" />
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
