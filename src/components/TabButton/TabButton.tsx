import { Link, useLocation } from "react-router-dom";
import styles from "./TabButton.module.scss";

export default function TabButton() {
    const location = useLocation();
    return (
        <>
            <ul className={styles.tabButton}>
                <li
                    className={`${styles.adminButton} ${
                        location.pathname === "/admin" ? styles.activeTab : ""
                    }`}
                >
                    <Link to="/admin">숙소</Link>
                </li>
                <li
                    className={`${styles.categoryButton} ${
                        location.pathname === "/admin/category"
                            ? styles.activeTab
                            : ""
                    }`}
                >
                    <Link to="/admin/category">카테고리</Link>
                </li>
            </ul>
        </>
    );
}
