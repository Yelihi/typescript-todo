import React from "react";
import styled from "styled-components";

import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Container>
      <Section>
        <Login />
        <Image>
          <img src="/images/todo2.jpg" />
        </Image>
      </Section>
    </Container>
  );
}

export default App;

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
  height: auto;
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
  }
`;
