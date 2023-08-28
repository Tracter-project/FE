import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CommunityList.module.scss";
import PostList from "../../components/PostList/PostList";
import AddButton from "../../components/AddButton/AddButton";
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

export default function CommunityList() {
  const navigate = useNavigate();
  const handleAddButton = () => {
    navigate("/community/addpost");
  };

  // article 전체 조회 API
  // const [articleList, setArticleList] = useState<IArticle[]>([]);

  // useEffect(() => {
  //   const fetchArticleList = async () => {
  //     try {
  //       const response = await axiosRequest.requestAxios<IArticle[]>(
  //         "get",
  //         `/articles`
  //       );

  //       setArticleList(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchArticleList();
  // }, []);

  return (
    <div className={styles.communityListContainer}>
      <div className={styles.addButton}>
        <AddButton onClick={handleAddButton}></AddButton>
      </div>
      <PostList postList={articleList}></PostList>{" "}
    </div>
  );
}

const articleList: IArticle[] = [
  {
    id: 1,
    subject: "질문",
    writer: "이뽀리",
    title: "글 제목",
    contents: "내용입니다",
    postLikeCount: 90,
    commentsCount: 20,
    date: "1일 전",
    placeImage:
      "https://yaimg.yanolja.com/v5/2023/07/11/16/640/64ad86a29096a7.09459065.jpg",
  },
  {
    id: 100,
    subject: "기타",
    writer: "이뽀리",
    title: "글 제목",
    contents: "dfasdfsdrsdfasdrsdfasdsarsfasdrdsrsadfasdfsd",
    postLikeCount: 90,
    commentsCount: 20,
    date: "1일 전",
    placeImage: "",
  },
  {
    id: 101,
    subject: "기타",
    writer: "이뽀리",
    title: "글 제목",
    contents: "dfasdfsdrsdfasdrsdfasdsarsfasdrdsrsadfasdfsd",
    postLikeCount: 90,
    commentsCount: 20,
    date: "1일 전",
    placeImage: "",
  },
  {
    id: 102,
    subject: "기타",
    writer: "이뽀리",
    title: "글 제목",
    contents: "dfasdfsdrsdfasdrsdfasdsarsfasdrdsrsadfasdfsd",
    postLikeCount: 90,
    commentsCount: 20,
    date: "1일 전",
    placeImage: "",
  },
  {
    id: 103,
    subject: "기타",
    writer: "뽀리",
    title: "글 제목",
    contents: "dfasdfsdrsdfasdrsdfasdsarsfasdrdsrsadfasdfsd",
    postLikeCount: 90,
    commentsCount: 20,
    date: "1일 전",
    placeImage: "",
  },
];
