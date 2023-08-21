import styles from "./MapLink.module.scss";
import React from "react";
import Title from "../Title/Title";
import { FaMapMarkedAlt } from "react-icons/fa";

const MapLink: React.FC = () => {
  return (
    <>
      <div className={styles.mapLink}>
        <FaMapMarkedAlt />
        <Title size="p">위치 바로가기</Title>
      </div>
    </>
  );
};

export default MapLink;
