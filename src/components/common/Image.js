import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../assets/placeholder.webp";

const Image = ({ src, alt }) => {
  return (
    <ImgWrapper>
      <Wrapper src={src} effect="blur" placeholderSrc={placeholder} alt={alt} />
    </ImgWrapper>
  );
};

export default Image;

const ImgWrapper = styled.div`
  width: 30%;
  height: auto;
  object-fit: cover;
  background-color: transparent;
  img {
    height: 25rem;
    width: 15rem;
    object-fit: cover;
    clip-path: ellipse(0.3rem 0.3rem 0.3rem 0.3rem);
    box-shadow: 0px 0px 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.3rem;
  }
`;

const Wrapper = styled(LazyLoadImage)`
  && {
    width: 100%;
    margin: 0.5rem;
  }
`;
