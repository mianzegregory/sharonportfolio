import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 5%;
  margin: 0;
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  h1 {
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.8;
    margin: 2rem;
    margin-top: 0;
    font-family: "Open Sans", sans-serif;
  }
  .portfolio-routing-buttons {
    margin-top: 5rem;
    margin-bottom: -2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    button {
      cursor: pointer;
      margin: 0 1rem;
      background-color: #fff;
      color: #000;
      padding: 0.4rem 1.3rem;
      text-align: center;
      border: 2px solid #d6c0af;
      box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
      border-radius: 1.5rem;
      text-decoration: none;
      display: inline-block;
      font-size: 1rem;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
    }
  }
  @media (max-width: 1024px) {
    padding: 2rem 1%;
    text-align: center;
    justify-content: flex-start;
    h1 {
      font-size: 1rem;
    }
    p {
      width: 100% !important;
      font-size: 0.8rem !important;
    }
  }
  @media(max-width: 500px){
    .portfolio-routing-buttons {
      width: 100vw;
      position: fixed;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      background-color: #fff;
      left: 0;
      bottom: 0;
      z-index: 4;
      box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
      padding: 1rem;
      button {
        margin: 0.3rem;
        font-size: 0.8rem;
        background-color: transparent;
        box-shadow: none;
        margin-bottom: 2rem;
        margin-top: 0;
        color: #000;
        padding: 0.3rem;
        text-align: center;
        border: none;
        text-decoration: none;
        display: inline-block;
        font-size: 0.8rem;
        font-family: "Open Sans", sans-serif;
        font-weight: bold;
      }
  }
`;

export default PageWrapper;
