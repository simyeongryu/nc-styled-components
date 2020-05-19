import React from "react";
import styled, { createGlobalStyle, keyframes, css } from "styled-components";

// 전역 스타일링. createGlobalStyle을 import한 후 컴포넌트 생성
const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;
// mixin: 재활용하기 위해 만든 CSS 덩어리
const SampleMixin = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px, 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ff7979;
`;

// attribute 추가하기
const Input = styled.input.attrs({
  required: true
})`
  border-radius: 10px;
  border: none;
  /* mixin 적용 */
  ${SampleMixin}
`;

const App = () => {
  return (
    <>
      {/* 전역 스타일링 컴포넌트 추가 */}
      <GlobalStyle />
      <Container>
        <Input placeholder="hello" />
      </Container>
    </>
  );
};

export default App;
