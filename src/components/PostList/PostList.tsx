import styles from "./PostList.module.scss";
import Title from "../Title/Title";
import LikeButton from "../LikeButton/LikeButton";
import { useNavigate } from "react-router-dom";

interface NewPost {
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

interface PostListProps {
  postList: NewPost[];
}

// postList.map => 현재 유저 likedPosts 목록에 있으면 like = true;
const like = false;

// 좋아요 수정 필요
export default function PostsList(props: PostListProps) {
  const { postList } = props;
  const maxLength: number = 25;

  const handleLikeBtn = (postId: number) => {
    alert(`ID ${postId}`);
  };

  const navigate = useNavigate();
  const handlelinkPost = (postId: number) => {
    navigate(`/community/posts/${postId}`);
  };

  return (
    <>
      <div className={styles.postList}>
        {postList.map((post) => (
          <div className={styles.postContainer}>
            <div className={styles.left} onClick={handlelinkPost}>
              <div className={styles.lefttop}>
                <div className={styles.writer}>
                  <Title size="b">{post.writer}</Title>
                </div>
                <div className={styles.date}>
                  <Title size="sub">{post.date}</Title>
                </div>
              </div>

              <div className={styles.postTitle}>
                <Title size="h5">{post.title}</Title>
              </div>

              <div className={styles.postContent}>
                <Title size="p">
                  {post.contents.length > maxLength
                    ? post.contents.substring(0, maxLength) + "..."
                    : post.contents}
                </Title>
              </div>

              <div className={styles.leftbottom}>
                <Title size="p">좋아요 {post.postLikeCount}개</Title>
                <Title size="p">댓글 {post.commentsCount}개</Title>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.righttop}>
                <div>
                  <Title size="h5">{post.subject}</Title>
                </div>
                <div className={styles.likeButton}>
                  <LikeButton
                    onClick={() => handleLikeBtn(post.id)}
                    like={like}
                  ></LikeButton>
                </div>
              </div>
              <div className={styles.thumbnail}>
                {post.placeImage !== "" ? (
                  <img src={post.placeImage} alt="Place Imgae" />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
