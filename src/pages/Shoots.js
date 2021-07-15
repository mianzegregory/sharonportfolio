import React from "react";
import data from "../data.json";
import Gallery from "react-photo-gallery";
import ContentWrapper from "../components/common/ContentWrapper";

const Shoots = () => {
  const photos = [
    {
      src: data.images.shoots[3],
      width: 7,
      height: 5,
    },

    {
      src: data.images.shoots[2],
      width: 2,
      height: 2,
    },
    {
      src: data.images.shoots[4],
      width: 7,
      height: 5,
    },
    {
      src: data.images.shoots[1],
      width: 5,
      height: 4,
    },
    {
      src: data.images.shoots[5],
      width: 7,
      height: 5,
    },
    {
      src: data.images.shoots[6],
      width: 3,
      height: 4,
    },
  ];

  return (
    <ContentWrapper>
      <Gallery photos={photos} direction={"column"} />;
    </ContentWrapper>
  );
};

export default Shoots;
