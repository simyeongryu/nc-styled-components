# Styled Components

별도의 sass 파일이나 css 파일 없이 css 작업을 할 수 있고 components를 좀 더 캡슐화한다.

## 설치

```
$ yarn add styled-components
```

## Global Style 전역 스타일링

**createGlobalStyle**을 import한 후 아래와 같이 작성하여 사용한다.

```js
import styled, { createGlobalStyle} from "styled-components";

// 전역 스타일링. createGlobalStyle을 import한 후 컴포넌트 생성
const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};
```

## Extend 

```js
// Button 컴포넌트의 스타일링을 적용한 a 태그
// 스타일을 추가하고 싶으면 styled()를 사용한다.
const Anchor = styled(Button)`
  text-decoration: none;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Button danger={false}>Hello</Button>
        <Button danger={true} rotationTime={4}>
          Hello
        </Button>
        {/* Button의 스타일링을 갖고 있는 a태그 */}
        <Anchor as="a" href="https://www.google.com">
          Go To Google
        </Anchor>
      </Container>
    </>
  );
};

export default App;

```

## keyframes, animation 사용

```js
// keyframes, css를 import
import styled, { createGlobalStyle, keyframes, css } from "styled-components";

// keyframes 사용
const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Button = styled.button`
  ${props => {
    if (props.danger) {
      // animation 사용. return 할 때 css를 이용한다.
      return css`
        animation: ${rotation} ${props.rotationTime}s linear infinite;
      `;
    }
  }}
`;
```

## attribute 추가하기, mixin 사용하기

**attrs()** 메소드 사용하고, 추가할 attribute들을 객체로 작성한다. 

**mixin**은 재활용하기 위하 만든 CSS 덩어리다. css 블록으로 만든 다음 사용하고자 하는 컴포넌트에 적용한다.

```js
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ff7979;
`;

// mixin: 재활용하기 위해 만든 CSS 덩어리
const SampleMixin = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px, 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
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
```

## Theme

색상 등 자주 사용되는 변수를 미리 지정해놓는 것.

theme.js 파일을 만들어 아래의 내용 작성

```js
const theme = {
  mainColor: "#95a5a6",
  dangerColor: "#e74c3c",
  successColor: "#2ecc71"
};

export default theme;
```

ThemeProvider를 import한 후 theme을 사용할 컴포넌트들을 모두 포함하게 한다.

theme props에 export한 theme 파일을 할당한다.

ThemeProvider 내의 모든 컴포넌트들은 props.theme을 통해 theme.js에서 작성한 모든 것을 사용할 수 있다.

App.js

```js
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

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
```

## Nesting