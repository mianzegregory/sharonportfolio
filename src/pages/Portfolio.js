import React from "react";
import PageWrapper from "../components/common/PageWrapper";
import Image from "../components/common/Image";
import { SixImagesContainer } from "../components/common/ImagesContainer";

const Portfolio = () => {
  return (
    <PageWrapper>
      <SixImagesContainer>
        <div className="img-row">
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
        </div>
        <div className="img-row">
          <Image
            src="https://ik.imagekit.io/sgmianze96/Sharon_s_Portfolio/portraits_compressed/1526504702076_min_ie_FfsTF_RTEQp0tNb7.jpg?updatedAt=1626348849935"
            alt="Nimu"
          />
          <Image
            src="https://ik.imagekit.io/sgmianze96/Sharon_s_Portfolio/portraits_compressed/she_glowing_min_amhd_ptMYy_KRvCJa7SW.jpg?updatedAt=1626348852887"
            alt="Nimu"
          />
          <Image
            src="https://ik.imagekit.io/sgmianze96/Sharon_s_Portfolio/portraits_compressed/img_0006_min_dzec4ts_mMJ76_bbWq0bOdAQ.jpg?updatedAt=1626348850361"
            alt="Greg"
          />
        </div>
      </SixImagesContainer>
    </PageWrapper>
  );
};

export default Portfolio;
