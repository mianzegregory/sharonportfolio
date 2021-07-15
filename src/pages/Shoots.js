import React from "react";
import styled from "styled-components";
import data from "../data.json";

const Shoots = () => {
  return (
    <Wrapper>
      <img src={data.images.events.cultureweek2018[1]} />
      <img src={data.images.events.cultureweek2018[2]} />
      <img src={data.images.events.cultureweek2018[3]} />
      <img src={data.images.events.cultureweek2018[4]} />
      <img src={data.images.events.cultureweek2018[5]} />
      <img src={data.images.events.cultureweek2018[6]} />
      <img src={data.images.events.cultureweek2018[7]} />
      <img src={data.images.events.cultureweek2018[8]} />
      <img src={data.images.events.cultureweek2018[9]} />
      <img src={data.images.events.cultureweek2018[10]} />
    </Wrapper>
  );
};

export default Shoots;

const Wrapper = styled.main`
  img {
    width: 30%;
  }
`;
