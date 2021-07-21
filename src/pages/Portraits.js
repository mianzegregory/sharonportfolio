import React, { lazy, Suspense } from "react";
import data from "../data.json";
import ContentWrapper from "../components/common/ContentWrapper";

const Gallery = lazy(() => import("react-photo-gallery"));

const renderLoader = () => <p>Loading...</p>;

const Portraits = () => {
  const photos = [
    {
      src: data.images.portraits[7],
      width: 4,
      height: 3,
      alt: "portrait 1",
    },
    {
      src: data.images.portraits[8],
      width: 4,
      height: 4,
      alt: "portrait 2",
    },
    {
      src: data.images.portraits[9],
      width: 6,
      height: 4,
      alt: "portrait 3",
    },
    {
      src: data.images.portraits[10],
      width: 6,
      height: 4,
      alt: "portrait 4",
    },
    {
      src: data.images.portraits[11],
      width: 4,
      height: 3,
      alt: "portrait 5",
    },
    {
      src: data.images.portraits[12],
      width: 6,
      height: 4,
      alt: "portrait 6",
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
      alt: "portrait 7",
    },
    {
      src: data.images.portraits[1],
      width: 4,
      height: 3,
      alt: "portrait 8",
    },
    {
      src: data.images.portraits[2],
      width: 4,
      height: 3,
      alt: "portrait 9",
    },
    {
      src: data.images.portraits[3],
      width: 4,
      height: 3,
      alt: "portrait 10",
    },
    {
      src: data.images.portraits[4],
      width: 4,
      height: 4,
      alt: "portrait 11",
    },
    {
      src: data.images.portraits[5],
      width: 4,
      height: 4,
      alt: "portrait 12",
    },
    {
      src: data.images.portraits[6],
      width: 4,
      height: 4,
      alt: "portrait 13",
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

export default Portraits;
