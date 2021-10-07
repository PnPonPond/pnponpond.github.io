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
    padding: 4rem 10% 2rem 10%;
  }
`;

const Title = styled(motion.h1)`
  color: #f49d37;
  margin-top: -10px;
  margin-bottom: 10px;
  @media (max-width: 425px) {
    margin-top: 30px;
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  line-height: 1.5;
  letter-spacing: 1.5;
  font-size: large;
  @media (max-width: 425px) {
    width: 100%;
    text-align: center;
    padding: 0 10%;
  }
`;

const Img = styled.img`
  width: 300px;
  margin-top: -50px;
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

const Card = styled(motion.div)`
  background-color: white;
  border-radius: 20px;
  padding: 30px 0;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  z-index: 2;
`;

function Profile() {
  return (
    <Container id="about">
      <Card whileHover={{ translateY: "-10px" }}>
        <Flex>
          <Flexbox>
            <Img src="/img/blogger.png" alt="" />
          </Flexbox>
          <Text>
            <Title>About me</Title>
            <p>
              Hi! 💕 My name is Chanyanuch Oranthavornkul and I'm Computer
              Engineering Student at Kasetsart University. I'm interested in
              Frontend and IOS development. I'm learning &nbsp;
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
