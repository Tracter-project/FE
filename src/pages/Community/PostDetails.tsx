import { useState, useEffect, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import styles from "./PostDetails.module.scss";
import Comment from "../../components/Comment/Comment";
import CommentView from "../../components/CommentView/CommentView";
import Title from "../../components/Title/Title";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import ModifyButton from "../../components/ModifyButton/ModifyButton";
import LikeButton from "../../components/LikeButton/LikeButton";
import Button from "../../components/Button/Button";
import axiosRequest from "../../api";

interface IResponse {
  data: IData;
}

interface IData {
  article: IArticle;
  comment: [IComment];
}

interface IArticle {
  id: number;
  subject: string;
  writer: string;
  title: string;
  contents: string;
  placeImage: string;
  articleLikeCount: number;
  createdAt: Date;
}

interface IComment {
  id: number;
  writer: string;
  articleId: number;
  comment: string;
  createdAt: Date;
}

function formatDate(date: Date): string {
  date = new Date(date);
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffTime / (1000 * 60));

  if (diffMinutes < 1) {
    return "방금 전";
  } else if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  }

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours}시간 전`;
  }

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) {
    return "1일 전";
  } else if (diffDays > 1) {
    return `${diffDays}일 전`;
  }

  return date.toLocaleDateString();
}

export default function PostDetails() {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const params = useParams();
  const articleId = Number(params.postId);
  const [article, setArticle] = useState<IData | null>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [modifiedTitle, setModifiedTitle] = useState<string>(""); // title
  const [modifiedContents, setModifiedContents] = useState<string>(""); // contents

  // 게시글 상세 조회 API
  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await axiosRequest.requestAxios<IResponse>(
          "get",
          `/articles/${articleId}`
        );

        if (response.data) {
          setArticle(response.data);
          setModifiedTitle(response.data.article.title);
          setModifiedContents(response.data.article.contents);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticleDetails();
  }, [articleId, isEditMode]);

  // 게시글 삭제 API
  const handleDeleteBtn = async () => {
    try {
      const response = await axiosRequest.requestAxios<number>(
        "delete",
        `/articles/${articleId}`,
        { id: articleId, token: token }
      );

      alert(`ID ${articleId} 게시글 삭제`);
    } catch (error) {
      alert("작성자만 삭제가 가능합니다.");
      console.error(error);
    }
  };

  const handleModifyTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setModifiedTitle(event.target.value);
  };
  const handleModifyContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setModifiedContents(event.target.value);
  };

  // 게시글 수정 API
  const handleSubmitBtn = async () => {
    try {
      if (modifiedTitle !== "" && modifiedContents !== "") {
        const newArticle = {
          id: articleId,
          title: modifiedTitle,
          contents: modifiedContents,
          token: token,
        };

        const response = await axiosRequest.requestAxios<IData>(
          "patch",
          `/articles/${articleId}`,
          newArticle
        );

        alert("게시글이 수정되었습니다.");
      } else {
        alert("수정할 내용을 입력해주세요.");
      }
    } catch (error) {
      alert("작성자만 수정이 가능합니다.");
      console.error(error);
    }

    setIsEditMode(false);
  };

  // 게시글 좋아요
  // const handleLikeBtn = async () => {
  //   try {
  //     const response = await axiosRequest.requestAxios<IResponse>(
  //       "post",
  //       "/articles/likes",
  //       {
  //         token: token,
  //         article: articleId,
  //         like: true,
  //       }
  //     );
  //     alert(`ID ${articleId} 게시글 좋아요`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className={styles.postDetailsContainer}>
      {article ? (
        <>
          <div className={styles.postContainer}>
            <div className={styles.left}>
              <div className={styles.lefttop}>
                <div className={styles.writer}>
                  <Title size="b">{article.article.writer}</Title>
                </div>
                <div className={styles.date}>
                  <Title size="sub">
                    {formatDate(article.article.createdAt)}
                  </Title>
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
                      onChange={handleModifyContents}
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
                    <Title size="h3">{article.article.title}</Title>
                  </div>
                  <div className={styles.postContent}>
                    <Title size="h5">{article.article.contents}</Title>
                  </div>
                </>
              )}

              <div className={styles.leftbottom}>
                <Title size="p">
                  좋아요 {article.article.articleLikeCount}개
                </Title>
                <Title size="p">댓글 {article.comment.length}개</Title>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.righttop}>
                <div className={styles.buttons}>
                  {token ? (
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
                  <LikeButton onClick={() => {}}></LikeButton>
                </div>
              </div>
              {article.article.placeImage !== "" ? (
                <img src={article.article.placeImage} alt="Place Imgae" />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={styles.commentContainer}>
            <CommentView commentList={article.comment}></CommentView>
            {token ? <Comment articleId={articleId}>댓글 작성</Comment> : ""}
          </div>
        </>
      ) : (
        <div>
          <Title size="p">Loading...</Title>
        </div>
      )}
    </div>
  );
}
