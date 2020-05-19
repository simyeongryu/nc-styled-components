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