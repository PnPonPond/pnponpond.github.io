import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../../pages/Home";
import Model from "../../pages/Model";

const Container = styled.div`
  position: relative;
  background-color: pink;
  min-height: 100vh;
  margin-top: ${(props) => (props.inView ? "-8vh" : "0")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-image: url("/img/Bg1.jpg"); */
  background-color: yellow;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Backdrop = styled.div`
  background-color: #000000c1;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-top: 0.2rem;
  text-transform: uppercase;
  color: white;
  z-index: 5;
`;

const HeroSection = React.forwardRef(({ inView }, ref) => {
  return (
    <Container ref={ref} inView={inView}>
      {/* <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/model" render={() => <Model />} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router> */}
    </Container>
  );
});

export default HeroSection;
