import React from "react";
import Gallery from "react-photo-gallery";
import ContentWrapper from "../components/common/ContentWrapper";
import data from "../data.json";

const Flatlays = () => {
  const photos = [
    {
      src: data.images.flatlays[1],
      width: 10,
      height: 9,
    },

    {
      src: data.images.flatlays[2],
      width: 7,
      height: 5,
    },
    {
      src: data.images.flatlays[3],
      width: 4,
      height: 3,
    },
    {
      src: data.images.flatlays[4],
      width: 6,
      height: 5,
    },
    {
      src: data.images.flatlays[5],
      width: 4,
      height: 3,
    },
  ];

  return (
    <ContentWrapper>
      <Gallery photos={photos} direction={"column"} />;
    </ContentWrapper>
  );
};

export default Flatlays;
