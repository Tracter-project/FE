// import React from "react";
import styles from "./CommentView.module.scss";
import Title from "../Title/Title";

// interface CommentViewProps {
//   children: React.ReactNode;
// }
// { children }: CommentViewProps
// // commentInput

export default function Comment() {
  // const {nickname, content, date} = children;
  // 체크박스

  return (
    <>
      <div className={styles.commentView}>
        <div className={styles.commentNickname}>
          <Title size="h3">닉네임</Title>
        </div>
        <div className={styles.commentContent}>
          <Title size="p">댓글 내용 입니다.</Title>
        </div>
        <div className={styles.commentDate}>
          <Title size="p">날짜</Title>
        </div>
      </div>
    </>
  );
}
