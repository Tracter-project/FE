import styles from "./Map.module.scss";
import React from "react";
import Title from "../Title/Title";
import { FaTimes } from "react-icons/fa";

interface MapProps {
  onClose: () => void; // 부모 컴포넌트로부터 전달되는 닫기 함수
}

const Map: React.FC<MapProps> = ({ onClose }) => {
  return (
    <>
      <div className={styles.map}>
        <div className={styles.mapTitle}>
          <Title size="h2">지도</Title>
          <Title size="h2">
            <FaTimes className={styles.closeBtn} onClick={onClose} />
          </Title>
        </div>
        <div id="map" className={styles.kakaoMap}></div>
      </div>
    </>
  );
};

export default Map;
