import styles from "./MainImage.module.scss";
import React from "react";

const MainImage: React.FC = () => {
  return (
    <div className={styles.mainImage}>
      <img
        src="https://yaimg.yanolja.com/v5/2022/10/31/12/640/635fc0f6abccc1.66460254.jpg" // 이미지 파일의 경로
        alt="Main Image" // 대체 텍스트
        className="main-image"
      />
    </div>
  );
};

export default MainImage;
