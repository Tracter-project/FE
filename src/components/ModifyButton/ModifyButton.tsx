// import React from "react";
import styles from "./ModifyButton.module.scss";
import { BiSolidPencil } from "react-icons/bi";

// onClick={}
export default function ModifyButton() {
  return (
    <>
      <button type="button" className={styles.modifyButton}>
        <BiSolidPencil className={styles.pencilIcon} />
      </button>
    </>
  );
}
