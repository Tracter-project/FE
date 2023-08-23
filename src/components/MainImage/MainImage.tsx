import styles from "./MainImage.module.scss";
import Title from "../Title/Title";
import LikeButton from "../LikeButton/LikeButton";

interface MainImageItem {
  id: number;
  imageUrl: string;
  title: string;
  popularity: number;
  price: number; // 가격
}

interface MainImageProps {
  MainImageList: MainImageItem[];
}

export default function MainImage(props: MainImageProps) {
  const { MainImageList } = props;

  const sortedPopularList = MainImageList.sort(
    (a, b) => b.popularity - a.popularity
  );
  const handleLikeBtn = (postId: number) => {
    alert(`ID ${postId} 게시글 좋아요`);
  };

  return (
    <>
      <div className={styles.mainBox}>
        {sortedPopularList.map((item) => (
          <div key={item.id} className={styles.mainImage}>
            <img src={item.imageUrl} alt={item.title} />
            <div className={styles.mainWrap}>
              <div className={styles.mainTitle}>
                <Title size="b" className={styles.title}>
                  {item.title}
                </Title>
                <Title size="p" className={styles.popularity}>
                  <LikeButton
                    onClick={() => handleLikeBtn(item.id)}
                  ></LikeButton>
                  {item.popularity}
                </Title>
              </div>
              <Title size="b" className={styles.price}>
                {item.price}
              </Title>
            </div>
            {/* 좋아요 버튼 추가해야합니다 */}
          </div>
        ))}
      </div>
    </>
  );
}
