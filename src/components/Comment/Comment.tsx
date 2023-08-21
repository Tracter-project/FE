import React, { ChangeEvent } from "react";
import styles from "./Comment.module.scss";
import Title from "../Title/Title";

interface CommentProps {
  children: React.ReactNode;
  commentInput: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export default function Comment({
  children,
  commentInput,
  onClick,
  onChange,
}: CommentProps) {
  return (
    <>
      <div className={styles.commentBox}>
        <input
          className={styles.commentInput}
          value={commentInput}
          onChange={onChange}
        ></input>
        <button className={styles.commentButton} onClick={onClick}>
          <Title size="p">{children}</Title>
        </button>
      </div>
    </>
  );
}
