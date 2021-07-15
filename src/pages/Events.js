import React from "react";
import data from "../data.json";
import Gallery from "react-photo-gallery";

const Events = () => {
  const photos = [
    {
      src: data.images.events.cultureweek2018[1],
      width: 6,
      height: 5,
    },

    {
      src: data.images.events.cultureweek2018[2],
      width: 5,
      height: 4,
    },
    {
      src: data.images.events.cultureweek2018[3],
      width: 6,
      height: 5,
    },
    {
      src: data.images.events.cultureweek2018[4],
      width: 4,
      height: 7,
    },
    {
      src: data.images.events.cultureweek2018[5],
      width: 3,
      height: 4,
    },
    {
      src: data.images.events.cultureweek2018[6],
      width: 4,
      height: 3,
    },

    {
      src: data.images.events.cultureweek2018[7],
      width: 3,
      height: 4,
    },
    {
      src: data.images.events.cultureweek2018[8],
      width: 4,
      height: 7,
    },
    {
      src: data.images.events.cultureweek2018[9],
      width: 3,
      height: 5,
    },
    {
      src: data.images.events.cultureweek2018[10],
      width: 3,
      height: 4,
    },
  ];

  return <Gallery photos={photos} direction={"column"} />;
};

export default Events;
