import { Link } from "react-router-dom";
import styles from "./PostList.module.scss";
import Title from "../Title/Title";
import LikeButton from "../LikeButton/LikeButton";

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

export default function PostsList(props: PostListProps) {
  const { postList } = props;
  const maxLength: number = 25;

  // API 나오면 추가 : 현재 유저 likedPosts 목록에 있으면 liked = true;
  return (
    <>
      <div className={styles.postList}>
        {postList.map((post) => (
          <Link to={`/community/posts/${post.id}`}>
            <div className={styles.postContainer}>
              <div className={styles.left}>
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
                    <LikeButton onClick={() => {}} like={false}></LikeButton>
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
          </Link>
        ))}
      </div>
    </>
  );
}
