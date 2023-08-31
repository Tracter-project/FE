import { useRecoilValue } from "recoil";
import styles from "./SearchResult.module.scss";
import Title from "../../components/Title/Title";
import MainImage from "../../components/MainImage/MainImage";
import { headerSearchInput } from "../../recoli/recoilAtoms";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import axiosRequest from "../../api";

interface IPlace {
  id: number;
  placeName: string;
  price: number;
  description: string;
  region: string;
  placeLikeCount: number;
  bannerImage: string;
  mainImage: string;
  detailImage: string;
  bookingURL: string;
  category: string;
}

export default function SearchResult() {
  const keyword = useRecoilValue(headerSearchInput);
  const [placeList, setPlaceList] = useState<IPlace[]>([]);

  useEffect(() => {
    const fetchPlaceList = async () => {
      try {
        const response = (await axiosRequest.requestAxios(
          "get",
          `/places/all`
        )) as AxiosResponse<IPlace[]>;

        setPlaceList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlaceList();
  }, []);

  const searched = placeList.filter((item) => item.placeName.includes(keyword));

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
