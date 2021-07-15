import React from "react";
import styled from "styled-components";
import data from "../data.json";
import Image from "../components/common/Image";

const Shoots = () => {
  return (
    <Wrapper>
      <Image image={data.images.shoots[1]} />
      <Image image={data.images.shoots[2]} />
      <Image image={data.images.shoots[3]} />
      <Image image={data.images.shoots[4]} />
      <Image image={data.images.shoots[5]} />
      <Image image={data.images.shoots[6]} />
    </Wrapper>
  );
};

export default Shoots;

const Wrapper = styled.main``;
