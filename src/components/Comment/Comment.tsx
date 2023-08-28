import React, { ChangeEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import styles from "./Comment.module.scss";
import Title from "../Title/Title";
import { commentInput } from "../../recoli/recoilAtoms";

interface CommentProps {
  children: React.ReactNode;
}

export default function Comment({ children }: CommentProps) {
  const [commentValue, setCommentValue] = useRecoilState(commentInput);

  const handleCommentValue = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentValue(event.target.value);
  };

  const handleCommentSubmit = () => {
    alert(commentValue); // api
    useEffect
  };

  return (
    <>
      <div className={styles.commentBox}>
        <input
          className={styles.commentInput}
          value={commentValue}
          onChange={handleCommentValue}
        ></input>
        <button className={styles.commentButton} onClick={handleCommentSubmit}>
          <Title size="p">{children}</Title>
        </button>
      </div>
    </>
  );
}
