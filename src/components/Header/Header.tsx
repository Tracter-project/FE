import styles from "./Header.module.scss";
import Title from "../Title/Title";
import DropdownOption from "../DropdownOption/DropdownOption";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

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
                                <Link to="/">호캉스</Link>
                                <Link to="/">글램핑</Link>
                                <Link to="/">풀빌라</Link>
                                <Link to="/">게스트하우스</Link>
                                <Link to="/">카라반</Link>
                            </div>
                        </DropdownOption>
                    </div>
                    <Title size="p">
                        <Link to="/">여행테스트</Link>
                    </Title>
                    <Title size="p">
                        <Link to="/">지도</Link>
                    </Title>
                </div>
                <div className={styles.right}>
                    <Title size="p">
                        <Link to="/">로그인</Link>
                    </Title>
                    <Title size="p">
                        <Link to="/">커뮤니티</Link>
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
