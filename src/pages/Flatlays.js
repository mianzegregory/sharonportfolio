import React from "react";
import styled from "styled-components";
import data from "../data.json";

const Flatlays = () => {
  return (
    <Wrapper>
      <img src={data.images.flatlays[1]} />
      <img src={data.images.flatlays[2]} />
      <img src={data.images.flatlays[3]} />
      <img src={data.images.flatlays[4]} />
      <img src={data.images.flatlays[5]} />
    </Wrapper>
  );
};

export default Flatlays;

const Wrapper = styled.main`
  img {
    width: 30%;
  }
`;
