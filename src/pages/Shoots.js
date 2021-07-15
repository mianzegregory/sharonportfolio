import React from "react";
import styled from "styled-components";
import data from "../data.json";

const Shoots = () => {
  return (
    <Wrapper>
      <img src={data.images.shoots[1]} />
      <img src={data.images.shoots[2]} />
      <img src={data.images.shoots[3]} />
      <img src={data.images.shoots[4]} />
      <img src={data.images.shoots[5]} />
      <img src={data.images.shoots[6]} />
    </Wrapper>
  );
};

export default Shoots;

const Wrapper = styled.main`
  img {
    width: 30%;
  }
`;
