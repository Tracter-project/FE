import styles from "./MainImage.module.scss";
import Title from "../Title/Title";
import LikeButton from "../LikeButton/LikeButton";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  const [popularityCounts, setPopularityCounts] = useState(
    MainImageList.map((item) => ({
      id: item.id,
      count: item.popularity > 0 ? 0 : 1,
    }))
  );

  const sortedPopularList = MainImageList.sort(
    (a, b) => b.popularity - a.popularity
  );
  // const handleLikeBtn = (postId: number) => {
  //   alert(`ID ${postId} 게시글 좋아요`);
  // };

  const handleLikeBtn = (postId: number) => {
    setPopularityCounts((prevCounts) =>
      prevCounts.map((countItem) =>
        countItem.id === postId
          ? {
              ...countItem,
              count: countItem.count === 1 ? 0 : 1,
            }
          : countItem
      )
    );
  };

  return (
    <>
      <div className={styles.mainBox}>
        {sortedPopularList.map((item) => (
          <div key={item.id} className={styles.mainImage}>
            <Link to="/place/:placeId">
              <img src={item.imageUrl} alt={item.title} />
            </Link>
            <div className={styles.mainWrap}>
              <div className={styles.mainTitle}>
                <Link to="/place/:placeId">
                  <Title size="b" className={styles.title}>
                    {item.title}
                  </Title>
                </Link>
                <Title size="p" className={styles.popularity}>
                  <LikeButton onClick={() => handleLikeBtn(item.id)} />
                  {
                    popularityCounts.find(
                      (countItem) => countItem.id === item.id
                    )?.count
                  }
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
