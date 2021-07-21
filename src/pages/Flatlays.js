import React, { lazy, Suspense } from "react";
import ContentWrapper from "../components/common/ContentWrapper";
import data from "../data.json";

const Gallery = lazy(() => import("react-photo-gallery"));

const renderLoader = () => <p>Loading...</p>;

const Flatlays = () => {
  const photos = [
    {
      src: data.images.flatlays[1],
      width: 10,
      height: 9,
      alt: "Flatlay 1",
    },

    {
      src: data.images.flatlays[2],
      width: 7,
      height: 5,
      alt: "Flatlay 2",
    },
    {
      src: data.images.flatlays[3],
      width: 4,
      height: 3,
      alt: "Flatlay 3",
    },
    {
      src: data.images.flatlays[4],
      width: 6,
      height: 5,
      alt: "Flatlay 4",
    },
    {
      src: data.images.flatlays[5],
      width: 4,
      height: 3,
      alt: "Flatlay 5",
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

export default Flatlays;
