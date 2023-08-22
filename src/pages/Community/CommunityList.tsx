import Title from "../../components/Title/Title";
import styles from "./CommunityList.module.scss";
import PostList from "../../components/PostList/PostList";

interface IPost {
  id: number;
  subject: string;
  nickname: string;
  title: string;
  contents: string;
  postLikeCount: number;
  commentsCount: number;
  date: string;
  placeImage: string;
}

export default function CommunityList() {
  const dummyPostList: IPost[] = [
    {
      id: 1,
      subject: "질문",
      nickname: "이뽀리",
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
      nickname: "이뽀리",
      title: "글 제목",
      contents: "dfasdfsdrsdfasdrsdfasdsarsfasdrdsrsadfasdfsd",
      postLikeCount: 90,
      commentsCount: 20,
      date: "1일 전",
      placeImage: "",
    },
  ];

  return (
    <>
      <PostList postList={dummyPostList}></PostList>
    </>
  );
}
