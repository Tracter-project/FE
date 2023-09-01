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

      alert("댓글이 등록되었습니다.");
      setCommentValue("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.commentBox}>
        {token ? (
          <input
            className={styles.commentInput}
            value={commentValue}
            onChange={handleCommentValue}
          ></input>
        ) : (
          <input
            className={styles.commentInput}
            value={commentValue}
            onChange={handleCommentValue}
            placeholder="회원만 댓글 작성이 가능합니다."
            disabled={true}
          ></input>
        )}
        <button className={styles.commentButton} onClick={handleCommentSubmit}>
          <Title size="p">{children}</Title>
        </button>
      </div>
    </>
  );
}
