import { Slide } from "@material-ui/core";
import Image from "../../components/common/Image";
import { SixImagesContainer } from "../../components/common/ImagesContainer";

const Shoots = () => {
  return (
    <Slide in direction="up" timeout={300}>
      <SixImagesContainer>
        <div className="img-row">
          <Image
            src="https://ik.imagekit.io/sgmianze96/Sharon_s_Portfolio/shoots_compressed/firr_6N9Tff8ZW.jpg?updatedAt=1626347265472"
            alt="Shoot 1"
          />
          <Image
            src="https://ik.imagekit.io/sgmianze96/Sharon_s_Portfolio/portraits_compressed/a_min_idn0zcqmn_rsBpKgaFZ.jpg?updatedAt=1626348852318"
            alt="Shoot 2"
          />
          <Image
            src="https://ik.imagekit.io/sgmianze96/Sharon_s_Portfolio/shoots_compressed/power_walk_0uAV54HyOu.jpg?updatedAt=1626347411452"
            alt="Shoot 3"
          />
        </div>
        <div className="img-row">
          <Image
            src="https://ik.imagekit.io/sgmianze96/Sharon_s_Portfolio/shoots_compressed/nimu_1_-r4adUqhss.jpg?updatedAt=1626347556850"
            alt="Shoot 4"
          />
          <Image
            src="https://ik.imagekit.io/sgmianze96/Sharon_s_Portfolio/shoots_compressed/dont_like_8oAHD1c52.jpg?updatedAt=1626348187264"
            alt="Shoot 5"
          />
          <Image
            src="https://ik.imagekit.io/sgmianze96/Sharon_s_Portfolio/shoots_compressed/nimu_2_HyCqP10NT.jpg?updatedAt=1626347719555"
            alt="Shoot 6"
          />
        </div>
      </SixImagesContainer>
    </Slide>
  );
};

export default Shoots;
