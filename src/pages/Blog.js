import { Fade } from "@material-ui/core";
import React from "react";
import PageWrapper from "../components/common/PageWrapper";

const Blog = () => {
  return (
    <Fade in timeout={900}>
      <PageWrapper></PageWrapper>
    </Fade>
  );
};

export default Blog;
