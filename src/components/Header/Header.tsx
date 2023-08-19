import styles from "./Header.module.scss";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import { VscTriangleDown } from "react-icons/vsc";
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
                    <Title size="p">
                        카테고리
                        <VscTriangleDown />
                    </Title>
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
