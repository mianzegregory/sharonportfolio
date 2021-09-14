import React from "react";
import PageWrapper from "../components/common/PageWrapper";
import Image from "../components/common/Image";
import ImagesContainer from "../components/common/ImagesContainer";

const About = () => {
  return (
    <PageWrapper>
      <h1>
        “A picture is a secret about a secret, the more it tells you the less
        you know.” - Diane Arbus
      </h1>
      <ImagesContainer>
        <Image
          src="https://ik.imagekit.io/sgmianze96/Sharon_s_Portfolio/about_image_pRrcinR_Q1F.jpg?updatedAt=1631541192751"
          alt="Me"
        />
        <p
          style={{
            width: "60%",
            backgroundColor: "transparent",
            lineHeight: "1.8",
            fontFamily: "Open Sans",
            fontSize: "1rem",
            color: "#707070",
          }}
        >
          I am a portrait and event-specialized photographer with a tireless
          work ethic and a vibrant creative side that often leads me to explore
          other diverse areas of photography. My keen eye and resourcefulness
          enable me to capture whatever image is necessary to convey a desired
          message. Having an active creative side allows me to give a unique
          twist to each photo in order to create a compelling image that lasts
          in the mind of an audience.
        </p>
      </ImagesContainer>
    </PageWrapper>
  );
};

export default About;
