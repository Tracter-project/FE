import styles from "./CommentView.module.scss";
import Title from "../Title/Title";
import CheckBox from "../CheckBox/CheckBox";
// import { useState } from "react";

interface NewComment {
  id: number;
  nickname: string;
  comment: string;
  date: string;
}

interface CommentViewProps {
  commentList: NewComment[];
}

export default function CommentView(props: CommentViewProps) {
  const { commentList } = props;

  return (
    <>
      {commentList.map((comment) => (
        <div className={styles.commentView} key={comment.id}>
          <div className={styles.checkbox}>
            <CheckBox></CheckBox>
          </div>
          <div className={styles.commentNickname}>
            <Title size="h5">{comment.nickname}</Title>
          </div>
          <div className={styles.commentContent}>
            <Title size="p">{comment.comment}</Title>
          </div>
          <div className={styles.commentDate}>
            <Title size="sub">{comment.date}</Title>
          </div>
        </div>
      ))}
    </>
  );
}
