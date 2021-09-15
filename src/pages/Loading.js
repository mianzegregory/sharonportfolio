import { Zoom } from "@material-ui/core";

import styled from "styled-components";

const LoadingPage = () => {
  return (
    <Zoom in>
      <Wrapper>
        <h1>SHARONJAOKO</h1>
        <p>Event & Portrait photographer</p>
      </Wrapper>
    </Zoom>
  );
};

export default LoadingPage;

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1,
  p {
    text-align: center;
    margin: 0.5rem;
  }
  h1 {
    font-size: 3rem;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
    color: #000;
  }
  p {
    font-size: 1.5rem;
    font-family: "Fira Sans", sans-serif;
    color: #707070;
  }
`;
