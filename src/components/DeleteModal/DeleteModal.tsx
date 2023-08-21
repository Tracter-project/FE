import styles from "./DeleteModal.module.scss";
import React from "react";
import Title from "../Title/Title";
import { FaTimes } from "react-icons/fa";

export default function DeleteModal() {
  return (
    <div className={styles.deleteModal}>
      <Title size="h2" className={styles.title}>
        <FaTimes className={styles.closeBtn} />
      </Title>
    </div>
  );
}
