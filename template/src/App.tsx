import React from "react";
import logo from "./logo.svg";
import Counter from "./features/counter/Counter";
import { Provider } from "react-redux";
import store from "./store";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #fff;
`;

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
`;

const Logo = styled.img`
  height: 20vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${float} 2s alternate infinite;
  }
`;

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Header>
          <Logo src={logo} alt="logo" />
          <Counter />
        </Header>
      </Container>
    </Provider>
  );
};

export default App;
