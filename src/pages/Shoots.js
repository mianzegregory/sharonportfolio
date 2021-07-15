import React from "react";
import PageWrapper from "../components/common/PageWrapper";
import data from "../data.json";
import Image from "../components/common/Image";

const Shoots = () => {
  return (
    <PageWrapper>
      <Image image={data.images.shoots[1]} />
      <Image image={data.images.shoots[2]} />
      <Image image={data.images.shoots[3]} />
      <Image image={data.images.shoots[4]} />
      <Image image={data.images.shoots[5]} />
      <Image image={data.images.shoots[6]} />
    </PageWrapper>
  );
};

export default Shoots;
