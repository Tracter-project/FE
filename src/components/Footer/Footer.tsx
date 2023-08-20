import Title from "../Title/Title";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerWrap}>
                <Title size="h2">Tracter</Title>
                <Title size="h2">Footer</Title>
            </div>
        </div>
    );
}
