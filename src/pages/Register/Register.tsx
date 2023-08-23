import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import BorderButton from "../../components/Button/BorderButton";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import styles from "./Register.module.scss";

function Name() {
    return (
        <>
            <div className={styles.name}>
                <Input icon={<BiSolidUser />} text={"닉네임"} />
                <BorderButton>중복확인</BorderButton>
            </div>
        </>
    );
}

function Email() {
    return (
        <>
            <div className={styles.mail}>
                <Input icon={<MdEmail />} text={"이메일"} />
                <BorderButton>메일발송</BorderButton>
            </div>
        </>
    );
}

function EmailConfirmation() {
    return (
        <>
            <div className={styles.emailConfirmation}>
                <Input icon={<MdMarkEmailRead />} text={"인증번호"} />
                <BorderButton>인증하기</BorderButton>
            </div>
        </>
    );
}

export default function Register() {
    return (
        <form className={styles.registerWrap}>
            <Title size="h2">Tracter</Title>
            <Title size="h5">회원가입</Title>
            <Name></Name>
            <Email></Email>
            <EmailConfirmation></EmailConfirmation>
            <Input
                icon={<AiFillLock />}
                text={"비밀번호"}
                className={styles.passwordinput}
            />
            <Input
                icon={<AiFillLock />}
                text={"비밀번호 확인"}
                className={styles.passwordinput}
            />
            <Button onClick={() => {}}>가입하기</Button>
        </form>
    );
}
