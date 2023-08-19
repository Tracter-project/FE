import React from "react";
import styles from "./Comment.module.scss";
import Title from "../Title/Title";

interface CommentProps {
  children: React.ReactNode;
  // commentInput: string;
}

// value={commentInput}
export default function Comment({ children }: CommentProps) {
  return (
    <>
      <div className={styles.commentBox}>
        <input className={styles.commentInput}></input>
        <button className={styles.commentButton}>
          <Title size="p">{children}</Title>
        </button>
      </div>
    </>
  );
}
