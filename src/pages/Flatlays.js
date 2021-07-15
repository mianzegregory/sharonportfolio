import React from "react";
import data from "../data.json";
import Image from "../components/common/Image";
import PageWrapper from "../components/common/PageWrapper";

const Flatlays = () => {
  return (
    <PageWrapper>
      <Image image={data.images.flatlays[1]} />
      <Image image={data.images.flatlays[2]} />
      <Image image={data.images.flatlays[3]} />
      <Image image={data.images.flatlays[4]} />
      <Image image={data.images.flatlays[5]} />
    </PageWrapper>
  );
};

export default Flatlays;
