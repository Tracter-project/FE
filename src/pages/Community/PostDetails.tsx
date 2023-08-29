import { useState, useEffect, ChangeEvent } from "react";
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
  articleLikeCount: number;
  comments: [];
}

export default function PostDetails() {
  const params = useParams();
  const articleId = Number(params.articleId);
  console.log(articleId, typeof articleId);
  const [isEditMode, setIsEditMode] = useState(false);
  const [modifiedTitle, setModifiedTitle] = useState(article.title); // title
  const [modifiedContents, setModifiedContents] = useState(article.contents); // contents

  // 게시글 상세 조회 API
  // const [article, setArticle] = useState<IArticle>();

  // useEffect(() => {
  //   const fetchArticleDetails = async () => {
  //     try {
  //       const response = await axiosRequest.requestAxios<IArticle>(
  //         "get",
  //         `/articles/${articleId}`
  //       );

  //       setArticle(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchArticleDetails();
  // }, [articleId]);

  const handleDeleteBtn = async () => {
    try {
      const response = await axiosRequest.requestAxios<number>(
        "delete",
        `/articles/${articleId}`,
        { articleId }
      );

      console.log(response);
      alert(`ID ${articleId} 게시글 삭제`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLikeBtn = () => {
    alert(`ID ${articleId}`);
  };

  // 수정하기
  const handleModifyTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setModifiedTitle(event.target.value);
  };
  const handleModifyContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setModifiedContents(event.target.value);
  };

  const handleSubmitBtn = async () => {
    alert(`수정된제목: ${modifiedTitle}\n수정된 내용: ${modifiedContents}`);

    try {
      const newArticle = {
        id: articleId,
        writer: "",
        title: modifiedTitle,
        content: modifiedContents,
      };

      const response = await axiosRequest.requestAxios<IArticle>(
        "patch",
        "/articles",
        newArticle
      );

      console.log(response);
      alert("게시글이 수정되었습니다.");
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
              <Title size="b">{article.writer}</Title>
            </div>
            <div className={styles.date}>
              {/* <Title size="sub">{article.date}</Title> */}
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
                <Title size="h3">{article.title}</Title>
              </div>
              <div className={styles.postContent}>
                <Title size="h5">{article.contents}</Title>
              </div>
            </>
          )}

          <div className={styles.leftbottom}>
            <Title size="p">좋아요 {article.articleLikeCount}개</Title>
            <Title size="p">댓글 {article.comments.length}개</Title>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.righttop}>
            <div className={styles.buttons}>
              {article.writer === "현재유저" ? (
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
          {article.placeImage !== "" ? (
            <img src={article.placeImage} alt="Place Imgae" />
          ) : (
            ""
          )}
        </div>
      </div>

      <div className={styles.commentContainer}>
        {article.comments && (
          <CommentView commentList={article.comments}></CommentView>
        )}
        <Comment articleId={article.id}>댓글 작성</Comment>
      </div>
    </div>
  );
}

const article: IArticle = {
  id: 1,
  subject: "질문",
  writer: "이뽀리",
  title: "글 제목",
  contents:
    "내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다",
  articleLikeCount: 90,
  placeImage:
    "https://yaimg.yanolja.com/v5/2023/07/11/16/640/64ad86a29096a7.09459065.jpg",
  // date: new Date("2023-08-19T15:45:00").toLocaleString(),
  comments: [
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
  ],
};
