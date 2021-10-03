import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  min-height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f4f3ee;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

function Profile() {
  return <Container></Container>;
}

export default Profile;
