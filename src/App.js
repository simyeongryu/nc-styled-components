import React from "react";
import styled, { createGlobalStyle } from "styled-components";

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

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  /* styled-components는 컴포넌트이기 때문에 
   * props를 사용할 수 있다.
  **/
  background-color: ${props => (props.danger ? "#c0392b" : "#2ecc71")};
`;

// Button 컴포넌트의 스타일링을 적용한 a 태그
const Anchor = styled(Button)`
  text-decoration: none;
`;

const App = () => {
  return (
    <>
      {/* 전역 스타일링 컴포넌트 추가 */}
      <GlobalStyle />
      <Container>
        <Button danger={false}>Hello</Button>
        <Button danger={true}>Hello</Button>
        <Anchor as="a" href="https://www.google.com">
          Go To Google
        </Anchor>
      </Container>
    </>
  );
};

export default App;
