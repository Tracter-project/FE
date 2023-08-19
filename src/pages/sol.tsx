import Comment from "../components/Comment/Comment";
import CommentView from "../components/CommentView/CommentView";
import AddButton from "../components/AddButton/AddButton";
import DeleteButton from "../components/DeleteButton/DeleteButton";
import ModifyButton from "../components/ModifyButton/ModifyButton";
import LikeButton from "../components/LikeButton/LikeButton";

export default function Sol() {
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
    </>
  );
}
