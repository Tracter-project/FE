import Comment from "../components/Comment/Comment";
import CommentView from "../components/CommentView/CommentView";
import AddButton from "../components/AddButton/AddButton";
import DeleteButton from "../components/DeleteButton/DeleteButton";
import ModifyButton from "../components/ModifyButton/ModifyButton";
import LikeButton from "../components/LikeButton/LikeButton";
import PostTitleInput from "../components/PostTitleInput/PostTitleInput";
import PostContentInput from "../components/PostContentInput/PostContentInput";
import SerachPlace from "../components/SerachPlace/SerachPlace";
import PostList from "../components/PostList/PostList";

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

export default function Sol() {
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
      id: 1,
      subject: "기타",
      nickname: "이뽀리",
      title: "글 제목",
      contents: "내용입니다",
      postLikeCount: 90,
      commentsCount: 20,
      date: "1일 전",
      placeImage: "",
    },
  ];

  return (
    <>
      <LikeButton></LikeButton>
      <AddButton></AddButton>
      <ModifyButton></ModifyButton>
      <DeleteButton></DeleteButton>
      <CommentView></CommentView>
      <CommentView></CommentView>
      <CommentView></CommentView>
      <Comment>댓글 작성</Comment>
      <PostTitleInput></PostTitleInput>
      <PostContentInput></PostContentInput>
      <SerachPlace></SerachPlace>
      <PostList postList={dummyPostList}></PostList>
    </>
  );
}
