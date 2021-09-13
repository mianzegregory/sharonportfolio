import styled from "styled-components";

const ImagesContainer = styled.div`
  background-color: #f3ebe5;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 85%;
  border-radius: 0.3rem;
  .lazy-load-image-background.blur.lazy-load-image-loaded {
    background-color: transparent;
  }
`;

export default ImagesContainer;