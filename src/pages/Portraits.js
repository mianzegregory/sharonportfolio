import React from "react";
import styled from "styled-components";
import Image from "../components/common/Image";
import data from "../data.json";

const Portraits = () => {
  return (
    <Wrapper>
      <Image image={data.images.portraits[1]} />
      <Image image={data.images.portraits[1]} />
      <Image image={data.images.portraits[2]} />
      <Image image={data.images.portraits[3]} />
      <Image image={data.images.portraits[4]} />
      <Image image={data.images.portraits[5]} />
      <Image image={data.images.portraits[6]} />
      <Image image={data.images.portraits[7]} />
      <Image image={data.images.portraits[8]} />
      <Image image={data.images.portraits[9]} />
      <Image image={data.images.portraits[10]} />
      <Image image={data.images.portraits[11]} />
      <Image image={data.images.portraits[12]} />
      <Image image={data.images.portraits[13]} />
      <Image image={data.images.portraits[14]} />
    </Wrapper>
  );
};

export default Portraits;

const Wrapper = styled.main``;
