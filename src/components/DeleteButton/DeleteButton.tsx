// import React from "react";
import styles from "./DeleteButton.module.scss";
import { FaTrash } from "react-icons/fa";

// onClick={}
export default function DeleteButton() {
  return (
    <>
      <button type="button" className={styles.deleteButton}>
        <FaTrash className={styles.trashIcon} />
      </button>
    </>
  );
}
