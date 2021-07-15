import React from "react";
import styled from "styled-components";
import data from "../data.json";

const Portraits = () => {
  return (
    <Wrapper>
      <img src={data.images.portraits[1]} />
      <img src={data.images.portraits[2]} />
      <img src={data.images.portraits[3]} />
      <img src={data.images.portraits[4]} />
      <img src={data.images.portraits[5]} />
      <img src={data.images.portraits[6]} />
      <img src={data.images.portraits[7]} />
      <img src={data.images.portraits[8]} />
      <img src={data.images.portraits[9]} />
      <img src={data.images.portraits[10]} />
      <img src={data.images.portraits[11]} />
      <img src={data.images.portraits[12]} />
      <img src={data.images.portraits[13]} />
      <img src={data.images.portraits[14]} />
    </Wrapper>
  );
};

export default Portraits;

const Wrapper = styled.main`
  img {
    width: 30%;
  }
`;
