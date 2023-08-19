import React from "react";
import styles from "./CommentView.module.scss";
import Title from "../Title/Title";

interface CommentViewProps {
  children: React.ReactNode;
}

// commentInput
export default function Comment({ children }: CommentViewProps) {
  // const {nickname, content, date} = children;
  // 체크박스

  return (
    <>
      <div className={styles.CommentView}>
        <div className={styles.CommentNickname}>
          <Title size="h3">닉네임</Title>
        </div>
        <div className={styles.CommentContent}>
          <Title size="p">댓글 내용 입니다.</Title>
        </div>
        <div className={styles.CommentDate}>
          <Title size="p">날짜</Title>
        </div>
      </div>
    </>
  );
}
