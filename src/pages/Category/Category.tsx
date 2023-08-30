import styles from "./Category.module.scss";
import Title from "../../components/Title/Title";
import MainImage from "../../components/MainImage/MainImage";
import DropdownOption from "../../components/DropdownOption/DropdownOption";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosRequest from "../../api"; // axios 라이브러리를 import
import { AxiosResponse } from "axios";

interface MainImageItem {
  id: number;
  imageUrl: string;
  title: string;
  popularity: number;
  price: number; // 가격
}

interface Category {
  id: number;
  categoryName: string;
}

interface CategoryRspons {
  status: number;
  message: string;
  category: Category[];
}

export default function Category() {
  const [imageList, setImageList] = useState<MainImageItem[]>([
    // {
    //   id: 1,
    //   imageUrl:
    //     "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
    //   title: "부산 호텔",
    //   price: 120000,
    //   popularity: 600,
    // },
    // {
    //   id: 2,
    //   imageUrl:
    //     "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
    //   title: "강원 호텔",
    //   price: 140000,
    //   popularity: 600,
    // },
    // {
    //   id: 3,
    //   imageUrl:
    //     "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
    //   title: "인천 호텔",
    //   price: 110000,
    //   popularity: 600,
    // },
    // {
    //   id: 4,
    //   imageUrl:
    //     "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
    //   title: "창원 호텔",
    //   price: 130000,
    //   popularity: 600,
    // },
    // {
    //   id: 5,
    //   imageUrl:
    //     "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
    //   title: "서울 호텔",
    //   price: 240000,
    //   popularity: 600,
    // },
    // {
    //   id: 6,
    //   imageUrl:
    //     "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
    //   title: "강원 호텔",
    //   price: 120000,
    //   popularity: 600,
    // },
    // {
    //   id: 7,
    //   imageUrl:
    //     "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
    //   title: "전주 호텔",
    //   price: 120000,
    //   popularity: 600,
    // },
    // {
    //   id: 8,
    //   imageUrl:
    //     "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
    //   title: "논산 호텔",
    //   price: 140000,
    //   popularity: 600,
    // },
  ]);
  const params = useParams();
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    console.log("전체조회다", categories);
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const categoryResponse: AxiosResponse<CategoryRspons> =
        await axiosRequest.requestAxios("get", "/categories");
      console.log("카테고리", categoryResponse.data);
      setCategories(categoryResponse.data);
      console.log("카테고리 조회 성공");
    } catch (error) {
      console.error("카테고리 조회 실패:", error);
    }
  };

  let categoryId = params.categoryId.replace(":", "");
  categoryId = Number(categoryId);
  console.log(categoryId, typeof categoryId);
  let categoryName = "";
  categories.map((category) => {
    if (category.id === categoryId) {
      categoryName = category.categoryName;
    }
  });

  useEffect(() => {
    const fetchCategoryImages = async () => {
      try {
        const response = await axiosRequest.requestAxios<MainImageItem[]>(
          "get",
          `/places/categories/호캉스` // Correct URL based on your router setup
        );

        setImageList(response);
      } catch (error) {
        console.error("Error fetching category images:", error);
      }
    };

    fetchCategoryImages();
  }, []);

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
      <MainImage MainImageList={imageList} />
    </>
  );
}

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
