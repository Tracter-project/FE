import styles from "./SerachPlace.module.scss";
import { IoMdSearch } from "react-icons/io";

export default function SerachPlace() {
  return (
    <>
      <div className={styles.search}>
        <IoMdSearch className={styles.searchIcon} />
        <input
          type="text"
          className="searchInput"
        />
      </div>
    </>
  );
}
