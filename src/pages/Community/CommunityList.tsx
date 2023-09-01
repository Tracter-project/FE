import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import styles from "./CommunityList.module.scss";
import PostList from "../../components/PostList/PostList";
import AddButton from "../../components/AddButton/AddButton";
import axiosRequest from "../../api";
import { useCookies } from "react-cookie";

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

export default function CommunityList() {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const [articleList, setArticleList] = useState<IArticle[]>([]);
  const navigate = useNavigate();
  const handleAddButton = () => {
    navigate("/community/addpost");
  };

  // article 전체 조회 API
  useEffect(() => {
    const fetchArticleList = async () => {
      try {
        const response = (await axiosRequest.requestAxios(
          "get",
          `/articles`
        )) as AxiosResponse<IArticle[]>;

        const sortedResponse = response.data.sort(
          (a: IArticle, b: IArticle) => {
            const createdAtA = new Date(a.createdAt);
            const createdAtB = new Date(b.createdAt);
            return createdAtB.getTime() - createdAtA.getTime();
          }
        );

        setArticleList(sortedResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticleList();
  }, []);

  return (
    <div className={styles.communityListContainer}>
      <div className={styles.addButton}>
        {token ? <AddButton onClick={handleAddButton}></AddButton> : ""}
      </div>
      <PostList postList={articleList}></PostList>
    </div>
  );
}
