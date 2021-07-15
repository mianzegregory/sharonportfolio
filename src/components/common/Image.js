import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../assets/placeholder.webp";

const Image = ({ image, alt }) => {
  return (
    <Wrapper src={image} effect="blur" placeholderSrc={placeholder} alt={alt} />
  );
};

export default Image;

const Wrapper = styled(LazyLoadImage)``;
