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
  placeImage: string;
  articleLikeCount: number;
  createdAt: Date;
}

interface PostListProps {
  postList: NewPost[];
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

export default function PostsList(props: PostListProps) {
  const { postList } = props;
  const maxLength: number = 25;

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
                    <Title size="sub">{formatDate(post.createdAt)}</Title>
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
                  <Title size="p">좋아요 {post.articleLikeCount}개</Title>
                  {/* <Title size="p">댓글 {post.comments.length}개</Title> */}
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
                  {post.subject === "기타" ? (
                    ""
                  ) : (
                    <img src={post.placeImage} alt="Place Imgae" />
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
