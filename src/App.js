import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

// 전역 스타일링. createGlobalStyle을 import한 후 컴포넌트 생성
const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ff7979;
`;

const Card = styled.div`
  background-color: red;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.mainColor};
`;

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Form />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
