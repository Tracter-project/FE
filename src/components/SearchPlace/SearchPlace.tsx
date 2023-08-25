import { ChangeEvent } from "react";
import { IoMdSearch } from "react-icons/io";
import { useRecoilState } from "recoil";
import styles from "./SearchPlace.module.scss";
import { searchPlace } from "../../recoli/recoilAtoms";

export default function SearchPlace() {
  const [searchInput, setSearchInput] = useRecoilState(searchPlace);
  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <div className={styles.search}>
        <IoMdSearch className={styles.searchIcon} />
        <input
          type="text"
          className="searchInput"
          placeholder="숙소 찾기"
          value={searchInput}
          onChange={handleSearchInput}
        />
      </div>
    </>
  );
}
