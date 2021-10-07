import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #f4f3ee;
  padding: 4rem 20% 0.5rem 20%;
  @media (max-width: 768px) {
    padding: 2rem 10%;
  }
`;

const Title = styled(motion.h1)`
  color: #f49d37;
  margin-top: 10px;
  margin-bottom: -10px;
  text-transform: uppercase;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Text = styled(motion.div)`
  width: 50%;
  line-height: 1.5;
  letter-spacing: 1.5;
  font-size: large;
  @media (max-width: 425px) {
    width: 100%;
    text-align: center;
  }
`;

const Img = styled.img`
  width: 250px;
  margin-top: -75px;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Span = styled.span`
  color: #f49d37;
  font-style: oblique;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 30px 0;
`;

function Profile() {
  return (
    <Container id="about">
      <Card>
        <Flex>
          <Flexbox>
            <Img src="/img/blogger.png" alt="" />
            <Title>About me</Title>
          </Flexbox>
          <Text>
            <p>
              &emsp; Hi! 💕 My name is Chanyanuch Oranthavornkul and I am
              Computer Engineering Student at Kasetsart University.
            </p>
            <p>
              &emsp; I am interested in Frontend and IOS development. I'm
              learning &nbsp;
              <Span>CSS Javascript ReactJs Python C C++</Span> and looking to
              further my skills as a Frontend Developer in the future.
            </p>
          </Text>
        </Flex>
      </Card>
    </Container>
  );
}

export default Profile;
