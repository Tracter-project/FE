import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { IoMdSearch } from "react-icons/io";
import styles from "./SearchPlace.module.scss";
import { searchPlace } from "../../recoli/recoilAtoms";
import { searchedData } from "../../recoli/recoilAtoms";
import axiosRequest from "../../api";

interface ISearchPlace {
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

  // place 전체 조회 API
  // 500 Error
  const [placeList, setPlaceList] = useState<IPlace[]>([]);
  useEffect(() => {
    const fetchPlaceList = async () => {
      try {
        const response = await axiosRequest.requestAxios<IPlace[]>(
          "get",
          `/places/all`
        );

        console.log("res ", response);
        setPlaceList(response);
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

  const handleResultClick = (clickedData: ISearchPlace) => {
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

// const placeList: ISearchPlace[] = [
//   {
//     id: 1,
//     mainImage:
//       "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
//     title: "서울 123 호텔",
//   },
//   {
//     id: 2,
//     mainImage:
//       "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
//     title: "제주 호텔",
//   },
//   {
//     id: 3,
//     mainImage:
//       "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
//     title: "부산 호텔",
//   },
//   {
//     id: 4,
//     mainImage:
//       "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
//     title: "강원 호텔",
//   },
//   {
//     id: 5,
//     mainImage:
//       "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
//     title: "서울 456 호텔",
//   },
//   {
//     id: 6,
//     mainImage:
//       "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
//     title: "제주 호텔3",
//   },
//   {
//     id: 7,
//     mainImage:
//       "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
//     title: "부산 호텔1",
//   },
//   {
//     id: 8,
//     mainImage:
//       "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
//     title: "강원 호텔2",
//   },
// ];
