import Comment from "../components/Comment/Comment";
import CommentView from "../components/CommentView/CommentView";
// import AddButton from "../components/AddButton/AddButton";
// import DeleteButton from "../components/DeleteButton/DeleteButton";
// import ModifyButton from "../components/ModifyButton/ModifyButton";
// import LikeButton from "../components/LikeButton/LikeButton";
import PostTitleInput from "../components/PostTitleInput/PostTitleInput";
import PostContentInput from "../components/PostContentInput/PostContentInput";
import SearchPlace from "../components/SearchPlace/SearchPlace";
import PostList from "../components/PostList/PostList";
import { useState, ChangeEvent } from "react";
// import { useNavigate } from "react-router-dom";

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

interface IComment {
  id: number;
  writer: string;
  comment: string;
  date: string;
}

export default function Sol() {
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
  ];

  const dummyCommentList: IComment[] = [
    {
      id: 1,
      writer: "이뽀리",
      comment: "댓글ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ",
      date: new Date("2023-08-19T15:45:00").toLocaleString(),
    },
    {
      id: 2,
      writer: "이뽀리",
      comment:
        "댓글ㄹㄹㄹㄹㄹㄹㄹㄹdfasdfsdfasdㅁㅇㄴㄹㅇㄴㅁㄱㄴㄹㅁㄴㅇㄱㄴㄹㅁㄴㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㄱㄴㅇㄹㅊㅁㄴㅇㄱㄴㅇㄱㄹㄹㄹ",
      date: new Date("2023-08-19T15:45:00").toLocaleString(),
    },
  ];

  //CommentSubmit
  const [commentInput, setCommentInput] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentInput(event.target.value);
  };

  const handleCommentSubmit = () => {
    alert(commentInput); // api
  };

  // AddButton - (1) 글 작성 페이지로 이동
  // const navigate = useNavigate();
  // const handleAddButton = () => {
  //   navigate("/community/addpost");
  // };

  // postTitleInput
  const [titleInput, setTitleInput] = useState("");
  const handleTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTitleInput(event.target.value);
  };

  // postContentInput
  const [contentInput, setContentInput] = useState("");
  const handleContentInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContentInput(event.target.value);
  };

  // serachPlace
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      {/* <LikeButton onClick={handleModifyButton}></LikeButton> */}
      {/* <AddButton onClick={handleAddButton}></AddButton> */}
      {/* <ModifyButton onClick={handleModifyButton}></ModifyButton> */}
      {/* <DeleteButton onClick={handleDeleteButton}></DeleteButton> */}
      <CommentView commentList={dummyCommentList}></CommentView>
      <Comment
        commentInput={commentInput}
        onChange={handleInputChange}
        onClick={handleCommentSubmit}
      >
        댓글 작성
      </Comment>
      <PostTitleInput
        onChange={handleTitleInput}
        titleInput={titleInput}
      ></PostTitleInput>
      <PostContentInput
        onChange={handleContentInput}
        contentInput={contentInput}
      ></PostContentInput>
      <SearchPlace
        searchInput={searchInput}
        onChange={handleSearchInput}
      ></SearchPlace>
      <PostList postList={dummyPostList}></PostList>
    </>
  );
}
