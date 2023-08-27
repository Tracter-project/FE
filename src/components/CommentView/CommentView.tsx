import { ChangeEvent, useState } from "react";
import styles from "./CommentView.module.scss";
import Title from "../Title/Title";
import CheckBox from "../CheckBox/CheckBox";
import ModifyButton from "../ModifyButton/ModifyButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import Button from "../Button/Button";

interface NewComment {
  id: number;
  writer: string;
  comment: string;
  date: string;
}

interface CommentViewProps {
  commentList: NewComment[];
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
  const handleSubmitBtn = () => {
    alert(`수정된 내용: ${selectedComment}`);
    setIsEditMode(false);
  };

  // 댓글 삭제
  const handleDeleteBtn = () => {
    if (selectedCommentId !== null) {
      alert(`ID ${selectedCommentId} 댓글 삭제`);
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
              <Title size="sub">{comment.date}</Title>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
