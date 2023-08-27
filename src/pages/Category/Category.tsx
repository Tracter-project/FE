import styles from "./Category.module.scss";
import Title from "../../components/Title/Title";
import MainImage from "../../components/MainImage/MainImage";
import DropdownOption from "../../components/DropdownOption/DropdownOption";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"; // axios 라이브러리를 import

interface MainImageItem {
  id: number;
  imageUrl: string;
  title: string;
  popularity: number;
  price: number; // 가격
}

const dummyMainImageList: MainImageItem[] = [
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

export default function Category() {
  // const [categoryPlace, setCategoryPlace] = useState<MainImageItem[]>([]);

  // useEffect(() => {
  //   // 카테고리에 해당하는 숙소 데이터를 불러오는 함수
  //   const fetchCategoryPlace = async (category: string) => {
  //     try {
  //       const response = await axios.get(`/places/categories/${category}`);
  //       const data = response.data.categoryPlace;
  //       setCategoryPlace(data);
  //     } catch (error) {
  //       console.error("Error fetching category place:", error);
  //     }
  //   };

  //   const category = "서울"; // 카테고리 값에 따라 동적으로 설정할 수 있음
  //   fetchCategoryPlace(category);
  // }, []);
  return (
    <>
      <Title size="h2" className={styles.title}>
        카테고리 (숙소리스트)
      </Title>
      <div className={styles.categoryTitle}>
        <Title size="h2">호캉스</Title>
        <DropdownOption title="전체" className={styles.dropdown}>
          <div className={styles.dropdownContent}>
            <Link to="/">서울</Link>
            <Link to="/">강원</Link>
            <Link to="/">전라</Link>
            <Link to="/">경상</Link>
            <Link to="/">제주</Link>
          </div>
        </DropdownOption>
      </div>
      <MainImage MainImageList={dummyMainImageList} />
    </>
  );
}
