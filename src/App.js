import React from "react";
import styled from "styled-components";

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

const App = () => {
  return (
    <Container>
      <Button danger={false}>Hello</Button>
      <Button danger={true}>Hello</Button>
    </Container>
  );
};

export default App;
