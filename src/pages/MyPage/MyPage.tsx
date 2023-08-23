import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import BorderButton from "../../components/Button/BorderButton";
import { MdEmail } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import styles from "./MyPage.module.scss";

export default function MyPage() {
    return (
        <>
            <Title size="h2">마이페이지</Title>
            <div className={styles.myPageWrap}>
                <Input icon={<MdEmail />} text={"기존이메일"} />
                <div className={styles.name}>
                    <Input icon={<BiSolidUser />} text={"기존닉네임"} />
                    <BorderButton>중복 확인</BorderButton>
                </div>
                <Input
                    icon={<AiFillLock />}
                    text={"기존비밀번호"}
                    className={styles.passwordinput}
                />
                <Input
                    icon={<AiFillLock />}
                    text={"기존비밀번호 확인"}
                    className={styles.passwordinput}
                />
            </div>
            <Title size="h2">좋아요</Title>
        </>
    );
}
