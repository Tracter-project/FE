// import React from "react";
import styles from "./LikeButton.module.scss";
import { FaHeart } from "react-icons/fa";

interface LikeButtonProps {
  onClick: () => void;
}

export default function LikeButton({ onClick }: LikeButtonProps) {
  return (
    <>
      <button type="button" className={styles.likeButton} onClick={onClick}>
        <FaHeart className={styles.heartIcon} />
      </button>
    </>
  );
}
