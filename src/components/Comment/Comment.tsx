import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import styles from "./Comment.module.scss";
import Title from "../Title/Title";
import { commentInput } from "../../recoli/recoilAtoms";
import axiosRequest from "../../api";

interface CommentProps {
  children: React.ReactNode;
  articleId: number;
}

interface IComment {
  articleId: number;
  writer: string;
  comment: string;
}

export default function Comment({ children, articleId }: CommentProps) {
  const [commentValue, setCommentValue] = useRecoilState(commentInput);
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;

  const handleCommentValue = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentValue(event.target.value);
  };

  const handleCommentSubmit = async () => {
    try {
      console.log("등록 id", articleId);
      const comment = {
        articleId: articleId,
        comment: commentValue,
        token: token,
      };

      const response = await axiosRequest.requestAxios<IComment>(
        "post",
        "/comments",
        comment
      );

      console.log(response);
      alert("댓글이 등록되었습니다.");
    } catch (error) {
      console.error(error);
    }
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
