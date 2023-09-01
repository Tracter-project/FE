import { useEffect } from "react";
import { ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { Link, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { headerSearchInput } from "../../recoli/recoilAtoms";
import Title from "../Title/Title";
import DropdownOption from "../DropdownOption/DropdownOption";
import styles from "./Header.module.scss";

export default function Header() {
  const navigate = useNavigate();
  const [headerSearch, setHeaderSearch] = useRecoilState(headerSearchInput);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]); // 토큰 쿠키 이름

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setHeaderSearch(event.target.value);
  };

  const handleSearchKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (headerSearch === "") {
        alert("검색어를 입력해주세요.");
        return;
      }
      navigate(`/search/result`); // 검색 결과 페이지로 이동
    }
  };

  useEffect(() => {
    if (cookies.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [cookies.token]);

  const handleLoginClick = () => {
    // 로그인 버튼 클릭 시 로그인 페이지로 이동
    navigate("/login");
  };

  const handleLogoutClick = () => {
    // 로그아웃 버튼 클릭 시 로그아웃 처리 및 홈페이지로 이동
    setIsLoggedIn(false); // 로그아웃 상태로 변경
    removeCookie("token"); // 로그아웃 시 토큰 쿠키 삭제
    navigate("/");
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Title size="h2">
            <Link to="/">TRACTER</Link>
          </Title>
        </div>
        <div className={styles.center}>
          <div className={styles.dropdown}>
            <DropdownOption title="카테고리">
              <div className={styles.dropdownContent}>
                <Link to={`/category/${category[0].id}`}>
                  {category[0].name}
                </Link>
                <Link to={`/category/${category[1].id}`}>
                  {category[1].name}
                </Link>
                <Link to={`/category/${category[2].id}`}>
                  {category[2].name}
                </Link>
                <Link to={`/category/${category[3].id}`}>
                  {category[3].name}
                </Link>
                <Link to={`/category/${category[4].id}`}>
                  {category[4].name}
                </Link>
              </div>
            </DropdownOption>
          </div>
          <Title size="p">
            <Link to="/test">여행테스트</Link>
          </Title>
          <Title size="p">
            <Link to="/placeMap">지도</Link>
          </Title>
        </div>
        <div className={styles.right}>
          {isLoggedIn ? (
            <>
              <button onClick={handleLogoutClick}>
                <Title size="p">로그아웃</Title>
              </button>

              <Title size="p">
                <Link to="/mypage">마이페이지</Link>
              </Title>
            </>
          ) : (
            <>
              <button onClick={handleLoginClick}>
                <Title size="p">로그인</Title>
              </button>
            </>
          )}
          <Title size="p">
            <Link to="/community/list">커뮤니티</Link>
          </Title>
          <div className={styles.search}>
            <IoMdSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="검색어를 입력해주세요"
              className="searchInput"
              value={headerSearch}
              onChange={handleSearchInput}
              onKeyDown={handleSearchKeyPress}
            />
          </div>
        </div>
      </header>
    </>
  );
}

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
