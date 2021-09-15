import { Fade } from "@material-ui/core";
import React from "react";
import Image from "../components/common/Image";
import ImagesContainer from "../components/common/ImagesContainer";
import PageWrapper from "../components/common/PageWrapper";

const Landing = () => {
  return (
    <Fade in timeout={900}>
      <PageWrapper>
        <h1>
          “Taking pictures is savouring life intensely, every hundredth of a
          second” - Marc Riboud
        </h1>
        <ImagesContainer>
          <Image
            src="https://ik.imagekit.io/sgmianze96/Sharon_s_Portfolio/portraits_compressed/img_0005_min_msdxcmg_caJun_8X_zPaV9Rdi.jpg?updatedAt=1626348850695"
            alt="Greg"
          />
          <Image
            src="https://ik.imagekit.io/sgmianze96/Sharon_s_Portfolio/portraits_compressed/o_min_khbt2oqee_vwMVB1h1H7.jpg?updatedAt=1626348851417"
            alt="Millie"
          />
          <Image
            src="https://ik.imagekit.io/sgmianze96/Sharon_s_Portfolio/portraits_compressed/fc_20210417_0005_min_uctbg_8J60Q792eV.jpg?updatedAt=1626348848800"
            alt="Njoki"
          />
        </ImagesContainer>
      </PageWrapper>
    </Fade>
  );
};

export default Landing;
