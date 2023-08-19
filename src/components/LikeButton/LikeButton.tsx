// import React from "react";
import styles from "./LikeButton.module.scss";
import { FaHeart } from "react-icons/fa";

// onClick={}
export default function LikeButton() {
  return (
    <>
      <button type="button" className={styles.likeButton}>
        <FaHeart className={styles.heartIcon} />
      </button>
    </>
  );
}
