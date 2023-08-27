import { useRecoilValue } from "recoil";
import styles from "./SearchResult.module.scss";
import Title from "../../components/Title/Title";
import MainImage from "../../components/MainImage/MainImage";
import { headerSearchInput } from "../../recoli/recoilAtoms";

interface Place {
  id: number;
  imageUrl: string;
  title: string;
  popularity: number;
  price: number; // 가격
}

export default function SearchResult() {
  const keyword = useRecoilValue(headerSearchInput);
  const searched = dummyPlaces.filter((item) =>
    item.title.includes(keyword)
  );

  return (
    <>
      <Title size="h2" className={styles.title}>
        검색 결과
      </Title>
      <div className={styles.categoryTitle}></div>
      <MainImage MainImageList={searched} />
    </>
  );
}

const dummyPlaces: Place[] = [
  {
    id: 1,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
    title: "서울 호텔",
    price: 200000,
    popularity: 900,
  },
  {
    id: 2,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
    title: "제주 호텔",
    price: 200000,
    popularity: 800,
  },
  {
    id: 3,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
    title: "부산 호텔",
    price: 200000,
    popularity: 700,
  },
  {
    id: 4,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
    title: "강원 호텔",
    price: 200000,
    popularity: 600,
  },
  {
    id: 5,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
    title: "서울 호텔",
    price: 200000,
    popularity: 900,
  },
  {
    id: 6,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
    title: "제주 호텔",
    price: 200000,
    popularity: 800,
  },
  {
    id: 7,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
    title: "부산 호텔",
    price: 200000,
    popularity: 700,
  },
  {
    id: 8,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
    title: "강원 호텔",
    price: 200000,
    popularity: 600,
  },
];
