import styles from "./Map.module.scss";
import React from "react";
import Title from "../Title/Title";
import { FaTimes } from "react-icons/fa";

const Map: React.FC = () => {
  return (
    <>
      <div className={styles.map}>
        <div className={styles.mapTitle}>
          <Title size="h2">지도</Title>
          <Title size="h2">
            <FaTimes className={styles.closeBtn} />
          </Title>
        </div>
        <div id="map" className={styles.kakaoMap}></div>
      </div>
    </>
  );
};

export default Map;
