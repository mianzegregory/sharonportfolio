import React from "react";
import data from "../data.json";
import Image from "../components/common/Image";
import PageWrapper from "../components/common/PageWrapper";

const Events = () => {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

export default Events;
