import styles from "./CommunityList.module.scss";
import PostList from "../../components/PostList/PostList";
import AddButton from "../../components/AddButton/AddButton";
import { useNavigate } from "react-router-dom";

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

export default function CommunityList() {
  const navigate = useNavigate();
  const handleAddButton = () => {
    navigate("/community/addpost");
  };

  return (
    <div className={styles.communityListContainer}>
      <div className={styles.addButton}>
        <AddButton onClick={handleAddButton}></AddButton>
      </div>
      <PostList postList={dummyPostList}></PostList>
    </div>
  );
}

const dummyPostList: IPost[] = [
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
