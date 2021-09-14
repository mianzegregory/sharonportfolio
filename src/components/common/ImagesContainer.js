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
  @media (max-width: 1024px) {
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }
`;

export const SixImagesContainer = styled.div`
  background-color: #f3ebe5;
  margin-top: 5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  border-radius: 0.3rem;
  .lazy-load-image-background.blur.lazy-load-image-loaded {
    background-color: transparent;
  }
  .img-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: transparent;
  }
  @media (max-width: 1024px) {
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    .img-row {
      display: flex;
      flex-direction: inherit;
      justify-content: inherit;
      align-items: inherit;
    }
  }
`;

export default ImagesContainer;
