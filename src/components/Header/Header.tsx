import styles from "./Header.module.scss";
import Title from "../Title/Title";
import DropdownOption from "../DropdownOption/DropdownOption";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

// 예시 데이터, 나중에 백에서 받아오기
const category = [
  {
    id: 1,
    name: "호캉스",
  },
  {
    id: 2,
    name: "글램핑",
  },
  {
    id: 3,
    name: "풀빌라",
  },
  {
    id: 4,
    name: "게스트하우스",
  },
  {
    id: 5,
    name: "카라반",
  },
];

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Title size="h2">
            <Link to="/">Tracter</Link>
          </Title>
        </div>
        <div className={styles.center}>
          <div className={styles.dropdown}>
            <DropdownOption title="카테고리">
              <div className={styles.dropdownContent}>
                <Link to={`/:${category[0].id}`}>{category[0].name}</Link>
                <Link to={`/:${category[1].id}`}>{category[1].name}</Link>
                <Link to={`/:${category[2].id}`}>{category[2].name}</Link>
                <Link to={`/:${category[3].id}`}>{category[3].name}</Link>
                <Link to={`/:${category[4].id}`}>{category[4].name}</Link>
              </div>
            </DropdownOption>
          </div>
          <Title size="p">
            <Link to="/test">여행테스트</Link>
          </Title>
          <Title size="p">
            <Link to="/map">지도</Link>
          </Title>
        </div>
        <div className={styles.right}>
          <Title size="p">
            <Link to="/login">로그인</Link>
          </Title>
          <Title size="p">
            <Link to="/community/list">커뮤니티</Link>
          </Title>
          <Title size="p">
            <div className={styles.search}>
              <IoMdSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="검색어를 입력해주세요"
                className="searchInput"
              />
            </div>
          </Title>
        </div>
      </header>
    </>
  );
}
