import styles from "./PostDetails.module.scss";
import Comment from "../../components/Comment/Comment";
import CommentView from "../../components/CommentView/CommentView";
import { useState, ChangeEvent } from "react";
import Title from "../../components/Title/Title";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import ModifyButton from "../../components/ModifyButton/ModifyButton";
import LikeButton from "../../components/LikeButton/LikeButton";

interface IPost {
  id: number;
  subject: string;
  writer: string;
  title: string;
  contents: string;
  postLikeCount: number;
  commentsCount: number;
  date: string;
  placeImage: string;
}

const post: IPost = {
  id: 1,
  subject: "질문",
  writer: "이뽀리",
  title: "글 제목",
  contents:
    "내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다",
  postLikeCount: 90,
  commentsCount: 20,
  date: "1일 전",
  placeImage:
    "https://yaimg.yanolja.com/v5/2023/07/11/16/640/64ad86a29096a7.09459065.jpg",
};

interface IComment {
  id: number;
  writer: string;
  comment: string;
  date: string;
}

export default function PostDetails() {
  //handleButtons
  const handleModifyBtn = (postId: number) => {
    alert(`ID ${postId} 게시글 수정`);
  };
  const handleDeleteBtn = (postId: number) => {
    alert(`ID ${postId} 게시글 삭제`);
  };
  const handleLikeBtn = (postId: number) => {
    alert(`ID ${postId} 게시글 좋아요`);
  };

  //CommentSubmit
  const [commentInput, setCommentInput] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentInput(event.target.value);
  };

  const handleCommentSubmit = () => {
    alert(commentInput); // api
  };

  // post.writer === 현재 유저 : Delete, Modify 버튼 o
  return (
    <div className={styles.postDetailsContainer}>
      <div className={styles.postContainer}>
        <section className={styles.left}>
          <div className={styles.lefttop}>
            <div className={styles.writer}>
              <Title size="b">{post.writer}</Title>
            </div>
            <div className={styles.date}>
              <Title size="sub">{post.date}</Title>
            </div>
          </div>

          <div className={styles.postTitle}>
            <Title size="h2">{post.title}</Title>
          </div>

          <div className={styles.postContent}>
            <Title size="h5">{post.contents}</Title>
          </div>

          <div className={styles.leftbottom}>
            <Title size="p">좋아요 {post.postLikeCount}개</Title>
            <Title size="p">댓글 {post.commentsCount}개</Title>
          </div>
        </section>
        <section className={styles.right}>
          <div className={styles.righttop}>
            {/* <div>
              <Title size="h5">{post.subject}</Title>
            </div> */}
            <div className={styles.buttons}>
              <ModifyButton
                onClick={() => handleModifyBtn(post.id)}
              ></ModifyButton>
              <DeleteButton
                onClick={() => handleDeleteBtn(post.id)}
              ></DeleteButton>
              <LikeButton onClick={() => handleLikeBtn(post.id)}></LikeButton>
            </div>
          </div>
          {post.placeImage !== "" ? (
            <img src={post.placeImage} alt="Place Imgae" />
          ) : (
            ""
          )}
        </section>
      </div>{" "}
      <div className={styles.commentContainer}>
        <CommentView commentList={dummyCommentList}></CommentView>
        <Comment
          commentInput={commentInput}
          onChange={handleInputChange}
          onClick={handleCommentSubmit}
        >
          댓글 작성
        </Comment>
      </div>
    </div>
  );
}

const dummyCommentList: IComment[] = [
  {
    id: 1,
    writer: "이뽀리",
    comment: "댓글ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ",
    date: new Date("2023-08-19T15:45:00").toLocaleString(),
  },
  {
    id: 2,
    writer: "뽀리",
    comment:
      "댓글ㄹㄹㄹㄹㄹㄹㄹㄹdfasdfsdfasdㅁㅇㄴㄹㅇㄴㅁㄱㄴㄹㅁㄴㅇㄱㄴㄹㅁㄴㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㄱㄴㅇㄹㅊㅁㄴㅇㄱㄴㅇㄱㄹㄹㄹ",
    date: new Date("2023-08-19T15:45:00").toLocaleString(),
  },
];
