import { ChangeEvent, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styles from "./CommentView.module.scss";
import Title from "../Title/Title";
import CheckBox from "../CheckBox/CheckBox";
import ModifyButton from "../ModifyButton/ModifyButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import Button from "../Button/Button";
import axiosRequest from "../../api";
import formatDate from "../../utils/formatDate";
import UserConfirm from "../../utils/userConfirm";

interface IComment {
  id: number;
  writer: string;
  articleId: number;
  comment: string;
  createdAt: Date;
}

interface CommentViewProps {
  commentList: IComment[];
}

export default function CommentView(props: CommentViewProps) {
  const { commentList } = props;
  const [selectedCommentId, setSelectedCommentId] = useState<number | null>(
    null
  );
  const [selectedComment, setSelectedComment] = useState<string>("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const loginUser = UserConfirm();

  const handleCheckboxChange = (commentId: number, comment: string) => {
    setSelectedCommentId(commentId === selectedCommentId ? null : commentId);
    setSelectedComment(comment);
  };

  // 댓글 수정
  const handleModifyBtn = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedComment(event.target.value);
  };

  const handleSubmitBtn = async () => {
    if (selectedCommentId !== null) {
      try {
        const newComment = {
          id: selectedCommentId,
          comment: selectedComment,
          token: token,
        };

        const response = await axiosRequest.requestAxios<IComment>(
          "patch",
          "/comments",
          newComment
        );

        alert("댓글이 수정되었습니다.");
        setIsEditMode(false);
      } catch (error) {
        alert("작성자만 수정이 가능합니다.");
        console.error(error);
      }
    }

    setIsEditMode(false);
  };

  // 댓글 삭제
  const handleDeleteBtn = async () => {
    if (selectedCommentId !== null) {
      try {
        const response = await axiosRequest.requestAxios<number>(
          "delete",
          "/comments",
          { id: selectedCommentId, token: token }
        );

        alert(`댓글이 삭제되었습니다.`);
      } catch (error) {
        alert("작성자만 삭제가 가능합니다.");
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className={styles.commentViewWrap}>
        <div className={styles.commentViewHead}>
          {selectedCommentId ? (
            <div className={styles.icons}>
              <ModifyButton
                onClick={() => setIsEditMode(!isEditMode)}
              ></ModifyButton>
              <DeleteButton onClick={handleDeleteBtn}></DeleteButton>
            </div>
          ) : (
            ""
          )}
        </div>

        {commentList.length !== 0 ? (
          <div>
            {commentList.map((comment) => (
              <div className={styles.commentView} key={comment.id}>
                {token && comment.writer === loginUser ? (
                  <div className={styles.checkbox}>
                    <CheckBox
                      checked={comment.id === selectedCommentId}
                      onChange={() =>
                        handleCheckboxChange(comment.id, comment.comment)
                      }
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className={styles.commentWriter}>
                  <Title size="h5">{comment.writer}</Title>
                </div>

                {isEditMode && selectedCommentId === comment.id ? (
                  <div className={styles.editMode}>
                    <div className={styles.editComment}>
                      <input
                        value={selectedComment}
                        onChange={handleModifyBtn}
                      />
                    </div>
                    <div className={styles.submitButton}>
                      <Button onClick={handleSubmitBtn}>수정</Button>
                      <Button onClick={() => setIsEditMode(false)}>취소</Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className={styles.commentContent}>
                      <Title size="p">{comment.comment}</Title>
                    </div>
                  </>
                )}

                <div className={styles.commentDate}>
                  <Title size="sub">{formatDate(comment.createdAt)}</Title>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyComment}>
            <Title size="h5">댓글이 없습니다.</Title>
          </div>
        )}
      </div>
    </>
  );
}
