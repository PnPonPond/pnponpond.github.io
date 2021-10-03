import React from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";

const Container = styled.div`
  position: relative;
  min-height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #a8acb1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Icons = styled.div`
  display: flex;
  padding: 0 10px;
`;

function Credit() {
  return (
    <Container>
      <Icons>
        {/* <Link to=""> */}
        <FaTwitter />

        {/* </Link> */}
      </Icons>
    </Container>
  );
}

export default Credit;
