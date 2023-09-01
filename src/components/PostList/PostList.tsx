import { Link } from "react-router-dom";
import styles from "./PostList.module.scss";
import Title from "../Title/Title";
import formatDate from "../../utils/formatDate";

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

export default function PostsList(props: PostListProps) {
  const { postList } = props;
  const maxLength: number = 15;

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
                <div key={post.id} className={styles.postTitle}>
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
                  {/* <Title size="p">좋아요 {post.articleLikeCount}개</Title> */}
                  {/* <Title size="p">댓글 {post.comment.length}개</Title> */}
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.righttop}>
                  <div>
                    <Title size="h5">{post.subject}</Title>
                  </div>
                  {/* <div className={styles.likeButton}>
                    <LikeButton onClick={() => {}}></LikeButton>
                  </div> */}
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
