import React, { useState } from "react";
import styled from "styled-components";

import Login from "./components/Login";
import Signup from "./components/Signup";

const Auth = () => {
  const [gotoAccount, setGotoAccount] = useState<boolean>(false);

  const toggleGotoAccount = () => {
    setGotoAccount((prev) => !prev);
  };

  return (
    <Container>
      <Section>
        {gotoAccount ? <Signup toggleGotoAccount={toggleGotoAccount} /> : <Login toggleGotoAccount={toggleGotoAccount} />}
        <Image>
          <img src="/images/todo2.jpg" />
        </Image>
      </Section>
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
`;

const Section = styled.section`
  display: flex;
  width: fit-content;
  height: 630px;
  background-color: white;
`;

const Image = styled.div`
  width: auto;
  height: 628px;
  padding: 20px;

  > img {
    width: 500px;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;
