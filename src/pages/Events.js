import React from "react";
import styled from "styled-components";
import data from "../data.json";
import Image from "../components/common/Image";

const Events = () => {
  return (
    <Wrapper>
      <Image image={data.images.events.cultureweek2018[1]} />
      <Image image={data.images.events.cultureweek2018[2]} />
      <Image image={data.images.events.cultureweek2018[3]} />
      <Image image={data.images.events.cultureweek2018[4]} />
      <Image image={data.images.events.cultureweek2018[5]} />
      <Image image={data.images.events.cultureweek2018[6]} />
      <Image image={data.images.events.cultureweek2018[7]} />
      <Image image={data.images.events.cultureweek2018[8]} />
      <Image image={data.images.events.cultureweek2018[9]} />
      <Image image={data.images.events.cultureweek2018[10]} />
    </Wrapper>
  );
};

export default Events;

const Wrapper = styled.main``;
