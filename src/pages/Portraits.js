import React from "react";
import data from "../data.json";
import Gallery from "react-photo-gallery";

const Portraits = () => {
  const photos = [
    {
      src: data.images.portraits[7],
      width: 4,
      height: 3,
    },
    {
      src: data.images.portraits[8],
      width: 4,
      height: 4,
    },
    {
      src: data.images.portraits[9],
      width: 6,
      height: 4,
    },
    {
      src: data.images.portraits[10],
      width: 6,
      height: 4,
    },
    {
      src: data.images.portraits[11],
      width: 4,
      height: 3,
    },
    {
      src: data.images.portraits[12],
      width: 6,
      height: 4,
    },
    {
      src: data.images.portraits[13],
      width: 3,
      height: 5,
    },
    {
      src: data.images.portraits[14],
      width: 3,
      height: 5,
    },
    {
      src: data.images.portraits[1],
      width: 4,
      height: 3,
    },
    {
      src: data.images.portraits[2],
      width: 4,
      height: 3,
    },
    {
      src: data.images.portraits[3],
      width: 4,
      height: 3,
    },
    {
      src: data.images.portraits[4],
      width: 4,
      height: 4,
    },
    {
      src: data.images.portraits[5],
      width: 4,
      height: 4,
    },
    {
      src: data.images.portraits[6],
      width: 4,
      height: 4,
    },
  ];

  return <Gallery photos={photos} direction={"column"} />;
};

export default Portraits;
