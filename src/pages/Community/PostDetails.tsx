import { useState, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import styles from "./PostDetails.module.scss";
import Comment from "../../components/Comment/Comment";
import CommentView from "../../components/CommentView/CommentView";
import Title from "../../components/Title/Title";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import ModifyButton from "../../components/ModifyButton/ModifyButton";
import LikeButton from "../../components/LikeButton/LikeButton";
import Button from "../../components/Button/Button";
import axiosRequest from "../../api";

interface IArticle {
  id: number;
  subject: string;
  writer: string;
  title: string;
  contents: string;
  placeImage: string;
}

interface IComment {
  id: number;
  articleId: number;
  writer: string;
  comment: string;
  date: string;
}

export default function PostDetails() {
  const params = useParams();
  const postId = Number(params.postId);
  console.log(postId, typeof postId);

  const handleDeleteBtn = () => {
    alert(`ID ${postId} 게시글 삭제`);
  };
  const handleLikeBtn = () => {
    alert(`ID ${postId}`);
  };

  // 수정하기
  const [isEditMode, setIsEditMode] = useState(false);
  const [modifiedTitle, setModifiedTitle] = useState(post.title); // title
  const [modifiedContents, setModifiedContents] = useState(post.contents); // contents

  const handleModifyTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setModifiedTitle(event.target.value);
  };
  const handleModifyContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setModifiedContents(event.target.value);
  };

  const handleSubmitBtn = async () => {
    alert(`수정된제목: ${modifiedTitle}\n수정된 내용: ${modifiedContents}`);

    try {
      const article = {
        id: postId,
        writer: "",
        title: modifiedTitle,
        content: modifiedContents,
      };

      const response = await axiosRequest.requestAxios<IArticle>(
        "patch",
        "/articles",
        article
      );

      console.log(response);
      alert("게시글이 등록되었습니다.");
    } catch (error) {
      console.error(error);
    }

    setIsEditMode(false);
  };

  // post.writer === 현재 유저 : Delete, Modify 버튼 o
  // 현재 유저 likedPosts에 있는 포스트인지 확인
  // user.likedPosts.id === 지금 Post.id랑 같으면
  // const like = true;
  return (
    <div className={styles.postDetailsContainer}>
      <div className={styles.postContainer}>
        <div className={styles.left}>
          <div className={styles.lefttop}>
            <div className={styles.writer}>
              <Title size="b">{post.writer}</Title>
            </div>
            <div className={styles.date}>
              <Title size="sub">{post.date}</Title>
            </div>
          </div>

          {isEditMode ? (
            <div className={styles.editMode}>
              <div className={styles.postTitle}>
                <input value={modifiedTitle} onChange={handleModifyTitle} />
              </div>
              <div className={styles.postContent}>
                <textarea
                  value={modifiedContents}
                  onChange={handleModifyContent}
                />
              </div>
              <div className={styles.submitButton}>
                <Button onClick={() => setIsEditMode(false)}>취소</Button>
                <Button onClick={handleSubmitBtn}>수정하기</Button>
              </div>
            </div>
          ) : (
            <>
              <div className={styles.postTitle}>
                {/* <Title size="h5">{post.subject}</Title> */}
                <Title size="h3">{post.title}</Title>
              </div>
              <div className={styles.postContent}>
                <Title size="h5">{post.contents}</Title>
              </div>
            </>
          )}

          <div className={styles.leftbottom}>
            <Title size="p">좋아요 {post.postLikeCount}개</Title>
            <Title size="p">댓글 {dummyCommentList.length}개</Title>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.righttop}>
            <div className={styles.buttons}>
              {post.writer === "이뽀리" ? (
                <div className={styles.writerButtons}>
                  <ModifyButton
                    onClick={() => setIsEditMode(true)}
                  ></ModifyButton>
                  <DeleteButton
                    onClick={() => handleDeleteBtn()}
                  ></DeleteButton>
                </div>
              ) : (
                ""
              )}
              <LikeButton
                onClick={() => handleLikeBtn()}
                like={false}
              ></LikeButton>
            </div>
          </div>
          {post.placeImage !== "" ? (
            <img src={post.placeImage} alt="Place Imgae" />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.commentContainer}>
        <CommentView commentList={dummyCommentList}></CommentView>
        <Comment>댓글 작성</Comment>
      </div>
    </div>
  );
}

const post: IArticle = {
  id: 1,
  subject: "질문",
  writer: "이뽀리",
  title: "글 제목",
  contents:
    "내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다",
  postLikeCount: 90,
  date: new Date("2023-08-19T15:45:00").toLocaleString(),
  placeImage:
    "https://yaimg.yanolja.com/v5/2023/07/11/16/640/64ad86a29096a7.09459065.jpg",
};

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
