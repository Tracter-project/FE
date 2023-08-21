import styles from "./CommentView.module.scss";
import Title from "../Title/Title";

interface NewComment {
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
        <div className={styles.commentView}>
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
