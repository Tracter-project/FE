import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { IoMdSearch } from "react-icons/io";
import styles from "./SearchPlace.module.scss";
import { searchPlace } from "../../recoli/recoilAtoms";
import { searchedData } from "../../recoli/recoilAtoms";
import axiosRequest from "../../api";

interface ISearchedPlace {
  id: number;
  placeName: string;
  mainImage: string;
}

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

export default function SearchPlace() {
  const [searchInput, setSearchInput] = useRecoilState(searchPlace);
  const [searchData, setSearchData] = useRecoilState(searchedData);
  const [placeList, setPlaceList] = useState<IPlace[]>([]);

  useEffect(() => {
    const fetchPlaceList = async () => {
      try {
        const response = await axiosRequest.requestAxios<IPlace[]>(
          "get",
          `/places/all`
        );

        console.log("숙소 전체 res ", response);
        setPlaceList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlaceList();
  }, []);

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const searched = placeList.filter((item) =>
    item.placeName.includes(searchInput)
  );

  const handleResultClick = (clickedData: ISearchedPlace) => {
    setSearchData(clickedData);
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <IoMdSearch className={styles.searchIcon} />
        <div className={styles.search}>
          <input
            type="text"
            className="searchInput"
            placeholder="숙소 찾기"
            value={searchInput}
            onChange={handleSearchInput}
          />
          {searchInput.length > 0 && (
            <ul className={styles.searchResult}>
              {searched.map((item, index) => (
                <li
                  className={styles.searchResultLi}
                  key={index}
                  onClick={() => handleResultClick(item)}
                >
                  {item.placeName}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
