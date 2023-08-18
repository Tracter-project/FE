import React from "react";
import styles from "./Comment.module.scss";
import Title from "../Title/Title";

interface CommentProps {
  children: React.ReactNode;
  commentInput: string;
}

// commentInput
export default function Comment({ children, commentInput }: CommentProps) {
  return (
    <>
      <div className={styles.CommentBox}>
        <input className={styles.CommentInput} value={commentInput}></input>
        <button className={styles.CommentButton}>
          <Title size="p">{children}</Title>
        </button>
      </div>
    </>
  );
}
