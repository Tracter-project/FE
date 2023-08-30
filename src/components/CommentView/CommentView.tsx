import { ChangeEvent, useState } from "react";
import styles from "./CommentView.module.scss";
import Title from "../Title/Title";
import CheckBox from "../CheckBox/CheckBox";
import ModifyButton from "../ModifyButton/ModifyButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import Button from "../Button/Button";
import axiosRequest from "../../api";


interface IComment {
  id: number;
  writer: string;
  comment: string;
  createdAt: Date;
}

interface CommentViewProps {
  commentList: IComment[];
}

function formatDate(date: Date): string {
  date = new Date(date);

  return date.toLocaleDateString();
}

export default function CommentView(props: CommentViewProps) {
  const { commentList } = props;
  const [selectedCommentId, setSelectedCommentId] = useState<number | null>(
    null
  );
  const [selectedComment, setSelectedComment] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

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
      alert(`수정된 내용: ${selectedComment}`);

      try {
        const newComment = {
          id: selectedCommentId,
          writer: "",
          comment: selectedComment,
        };

        const response = await axiosRequest.requestAxios<IComment>(
          "post",
          "/comments",
          newComment
        );

        console.log(response);
        alert("댓글이 수정되었습니다.");
      } catch (error) {
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
          { selectedCommentId }
        );

        console.log(response);
        alert(`ID ${selectedCommentId} 댓글 삭제`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  // 체크박스 : comment.writer === 현재 유저일 경우에만 보이게
  return (
    <>
      <div className={styles.commentViewWrap}>
        <div className={styles.commentViewHead}>
          <div className={styles.title}>
            <Title size="h5">댓글</Title>
          </div>

          <div className={styles.icons}>
            <ModifyButton
              onClick={() => setIsEditMode(!isEditMode)}
            ></ModifyButton>
            <DeleteButton onClick={handleDeleteBtn}></DeleteButton>
          </div>
        </div>
        {commentList.map((comment) => (
          <div className={styles.commentView} key={comment.id}>
            {comment.writer === "뽀리" ? (
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
                  <input value={selectedComment} onChange={handleModifyBtn} />
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
    </>
  );
}
