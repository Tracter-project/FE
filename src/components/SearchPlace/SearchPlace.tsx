import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { IoMdSearch } from "react-icons/io";
import styles from "./SearchPlace.module.scss";
import { searchPlace } from "../../recoli/recoilAtoms";
import { searchedData } from "../../recoli/recoilAtoms";

interface Place {
  id: number;
  imageUrl: string;
  title: string;
}

export default function SearchPlace() {
  const [searchInput, setSearchInput] = useRecoilState(searchPlace);
  const [searchData, setSearchData] = useRecoilState(searchedData);

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const searched = dummyPlaces.filter((item) =>
    item.title.includes(searchInput)
  );

  const handleResultClick = (clickedData: Place) => {
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
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

const dummyPlaces: Place[] = [
  {
    id: 1,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
    title: "서울 123 호텔",
  },
  {
    id: 2,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
    title: "제주 호텔",
  },
  {
    id: 3,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
    title: "부산 호텔",
  },
  {
    id: 4,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
    title: "강원 호텔",
  },
  {
    id: 5,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
    title: "서울 456 호텔",
  },
  {
    id: 6,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
    title: "제주 호텔3",
  },
  {
    id: 7,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
    title: "부산 호텔1",
  },
  {
    id: 8,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
    title: "강원 호텔2",
  },
];
