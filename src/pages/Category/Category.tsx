import styles from "./Category.module.scss";
import Title from "../../components/Title/Title";
import MainImage from "../../components/MainImage/MainImage";
import DropdownOption from "../../components/DropdownOption/DropdownOption";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosRequest from "../../api"; // axios 라이브러리를 import
import { AxiosResponse } from "axios";

interface IResponse {
  data: MainImageItem[];
}

interface MainImageItem {
  id: number;
  mainImage: string;
  placeName: string;
  placeLikeCount: number;
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
  const [selectedCategoryName, setSelectedCategoryName] = useState<
    string | null
  >(null);

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
    const selectedCategory = categories.find(
      (category) => category.id === categoryId
    );

    if (selectedCategory) {
      setSelectedCategoryName(selectedCategory.categoryName);
    }
  }, [categoryId, categories]);

  useEffect(() => {
    const fetchCategoryImages = async () => {
      try {
        if (selectedCategoryName) {
          const response = await axiosRequest.requestAxios<IResponse>(
            "get",
            `/places/categories/${selectedCategoryName}`
          );

          setImageList(response.data);
        }
      } catch (error) {
        console.error("Error fetching category images:", error);
      }
    };

    if (selectedCategoryName !== null) {
      fetchCategoryImages();
    }
  }, [selectedCategoryName]);

  return (
    <>
      {selectedCategoryName && (
        <>
          <Title size="h2" className={styles.title}>
            {selectedCategoryName}
          </Title>
          <MainImage MainImageList={imageList} />
        </>
      )}
    </>
  );
}
