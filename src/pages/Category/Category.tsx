import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Category.module.scss";
import Title from "../../components/Title/Title";
import MainImage from "../../components/MainImage/MainImage";
import DropdownOption from "../../components/DropdownOption/DropdownOption";
import { AxiosResponse } from "axios";
import axiosRequest from "../../api"; // axios 라이브러리를 import

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
  const [imageList, setImageList] = useState<MainImageItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState<
    string | null
  >(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryResponse: AxiosResponse = await axiosRequest.requestAxios(
          "get",
          "/categories"
        );
        console.log(categoryResponse.data);
        setCategories(categoryResponse.data);
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
      setImageList([]);
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
