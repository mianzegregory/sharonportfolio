import React, { lazy, Suspense } from "react";
import data from "../data.json";
import ContentWrapper from "../components/common/ContentWrapper";

const Gallery = lazy(() => import("react-photo-gallery"));

const renderLoader = () => <p>Loading...</p>;

const Events = () => {
  const photos = [
    {
      src: data.images.events.cultureweek2018[1],
      width: 6,
      height: 5,
      alt: "culture week 1",
    },

    {
      src: data.images.events.cultureweek2018[2],
      width: 5,
      height: 4,
      alt: "culture week 2",
    },
    {
      src: data.images.events.cultureweek2018[3],
      width: 6,
      height: 5,
      alt: "culture week 3",
    },
    {
      src: data.images.events.cultureweek2018[4],
      width: 4,
      height: 7,
      alt: "culture week 4",
    },
    {
      src: data.images.events.cultureweek2018[5],
      width: 3,
      height: 4,
      alt: "culture week 5",
    },
    {
      src: data.images.events.cultureweek2018[6],
      width: 4,
      height: 3,
      alt: "culture week 6",
    },

    {
      src: data.images.events.cultureweek2018[7],
      width: 3,
      height: 4,
      alt: "culture week 7",
    },
    {
      src: data.images.events.cultureweek2018[8],
      width: 4,
      height: 7,
      alt: "culture week 8",
    },
    {
      src: data.images.events.cultureweek2018[9],
      width: 3,
      height: 5,
      alt: "culture week 9",
    },
    {
      src: data.images.events.cultureweek2018[10],
      width: 3,
      height: 4,
      alt: "culture week 10",
    },
  ];

  return (
    <ContentWrapper>
      <Suspense fallback={renderLoader}>
        <Gallery photos={photos} direction={"column"} />;
      </Suspense>
    </ContentWrapper>
  );
};

export default Events;
