import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { loginInput } from "../../recoil/recoilAtoms";
import { useRecoilValue } from "recoil";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import LocalImg from "../../components/LocalImg/LocalImg";
import LoginImg from "../../assets/loginImg.png";
import styles from "./Login.module.scss";

export default function Login() {
    const newLoginInput = useRecoilValue(loginInput);

    const navigate = useNavigate();
    const handleSubmit = () => {
        alert(`이메일: ${newLoginInput} 내용: ${newLoginInput}`);
        navigate("/");
    };
    return (
        <form className={styles.loginWrap}>
            <LocalImg
                src={LoginImg}
                alt="로그인 이미지"
                className={styles.imgStyle}
            ></LocalImg>
            <div className={styles.login}>
                <Title size="h2">Tracter</Title>
                <Title size="h5">로그인</Title>
                <Input icon={<MdEmail />} text={"이메일"} />
                <Input icon={<AiFillLock />} text={"비밀번호"} />
                <Button onClick={handleSubmit}>로그인</Button>
            </div>
        </form>
    );
}
