import React from "react";
import styled from "styled-components";
import data from "../data.json";
import Image from "../components/common/Image";

const Flatlays = () => {
  return (
    <Wrapper>
      <Image image={data.images.flatlays[1]} />
      <Image image={data.images.flatlays[2]} />
      <Image image={data.images.flatlays[3]} />
      <Image image={data.images.flatlays[4]} />
      <Image image={data.images.flatlays[5]} />
    </Wrapper>
  );
};

export default Flatlays;

const Wrapper = styled.main``;
