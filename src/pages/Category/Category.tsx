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

export default function Category() {
  const params = useParams();
  const categoryId = Number(params.categoryId);
  console.log(categoryId, typeof categoryId);
  const [imageList, setImageList] = useState<MainImageItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>("");

  useEffect(() => {
    console.log("전체조회다", categories);
    const fetchCategories = async () => {
      try {
        const categoryResponse: AxiosResponse = await axiosRequest.requestAxios(
          "get",
          "/categories"
        );

        setCategories(categoryResponse.data);
        console.log("카테고리", categoryResponse.data);
      } catch (error) {
        console.error("카테고리 조회 실패:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    console.log("이름찾기");
    const selectedCategory = categories.find(
      (category) => category.id === categoryId
    );

    if (selectedCategory) {
      setSelectedCategoryName(selectedCategory.categoryName);
      console.log(selectedCategory.categoryName);
    }
  }, [categoryId, categories]);

  useEffect(() => {
    const fetchCategoryImages = async () => {
      try {
        if (selectedCategoryName) {
          const response = await axiosRequest.requestAxios<MainImageItem[]>(
            "get",
            `/places/categories/${selectedCategoryName}`
          );

          setImageList(response.data);
        }
      } catch (error) {
        console.error("Error fetching category images:", error);
      }
    };

    fetchCategoryImages();
  }, [selectedCategoryName]);

  return (
    <>
      <Title size="h2" className={styles.title}>
        Category ({selectedCategoryName})
      </Title>
      <div className={styles.categoryTitle}>
        <Title size="h2">{selectedCategoryName}</Title>
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
