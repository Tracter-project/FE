import { ChangeEvent } from "react";
import styles from "./SearchPlace.module.scss";
import { IoMdSearch } from "react-icons/io";

interface SearchPlaceProps {
  searchInput: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchPlace({
  searchInput,
  onChange,
}: SearchPlaceProps) {
  return (
    <>
      <div className={styles.search}>
        <IoMdSearch className={styles.searchIcon} />
        <input
          type="text"
          className="searchInput"
          placeholder="숙소 찾기"
          value={searchInput}
          onChange={onChange}
        />
      </div>
    </>
  );
}
