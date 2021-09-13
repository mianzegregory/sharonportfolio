import React, { lazy, Suspense } from "react";
import data from "../data.json";
import PageWrapper from "../components/common/PageWrapper";

const Gallery = lazy(() => import("react-photo-gallery"));

const renderLoader = () => <p>Loading...</p>;

const Shoots = () => {
  const photos = [
    {
      src: data.images.shoots[3],
      width: 7,
      height: 5,
      alt: "A photo of a shoot",
    },

    {
      src: data.images.shoots[2],
      width: 2,
      height: 2,
      alt: "A photo of a shoot 2",
    },
    {
      src: data.images.shoots[4],
      width: 7,
      height: 5,
      alt: "A photo of a shoot 3",
    },
    {
      src: data.images.shoots[1],
      width: 5,
      height: 4,
      alt: "A photo of a shoot 4",
    },
    {
      src: data.images.shoots[5],
      width: 7,
      height: 5,
      alt: "A photo of a shoot 5",
    },
    {
      src: data.images.shoots[6],
      width: 3,
      height: 4,
      alt: "A photo of a shoot 6",
    },
  ];

  return (
    <PageWrapper>
      <Suspense fallback={renderLoader}>
        <Gallery photos={photos} direction={"column"} />;
      </Suspense>
    </PageWrapper>
  );
};

export default Shoots;
