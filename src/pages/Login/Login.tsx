import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AxiosResponse } from "axios";
import axiosRequest from "../../api";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import LocalImg from "../../components/LocalImg/LocalImg";
import LoginImg from "../../assets/loginImg.png";
import styles from "./Login.module.scss";
import { useState } from "react";

interface LoginResponse {
    status: number;
    message: string;
    Authorization?: string;
}
export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleEmailChange = (email: string) => {
        setEmail(email);
        console.log("이메일", email);
    };
    const handlePasswordChange = (password: string) => {
        setPassword(password);
        console.log("비밀번호", password);
    };
    const navigate = useNavigate();
    const handleLogin = async () => {
        setErrorMessage("");

        if (!email || !password) {
            setErrorMessage("이메일과 비밀번호를 입력해주세요.");
            return;
        }
        try {
            const loginResponse: AxiosResponse<LoginResponse> =
                await axiosRequest.requestAxios("post", "/login", {
                    email,
                    password,
                });
            if (loginResponse.status === 201) {
                const token = loginResponse.data.Authorization ?? "";
                // 토큰을 localStorage에 저장
                localStorage.setItem("token", token);
                alert("로그인 성공");
                console.log("로그인 성공");
                navigate("/"); // 메인페이지로 이동
            } else if (loginResponse.status === 400) {
                setErrorMessage(
                    "입력하신 이메일은 회원가입되어 있지 않습니다."
                );
            } else if (loginResponse.status === 401) {
                setErrorMessage("비밀번호가 일치하지 않습니다.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.loginWrap}>
            <LocalImg
                src={LoginImg}
                alt="로그인 이미지"
                className={styles.imgStyle}
            ></LocalImg>
            <div className={styles.login}>
                <Title size="h2">Tracter</Title>
                <Title size="h5">로그인</Title>
                <Input
                    icon={<MdEmail />}
                    text={"이메일"}
                    value={email}
                    onChange={handleEmailChange}
                />
                <Input
                    icon={<AiFillLock />}
                    text={"비밀번호"}
                    value={password}
                    onChange={handlePasswordChange}
                />
                <Button onClick={handleLogin}>로그인</Button>
                {errorMessage && (
                    <p className={styles.errorMessage}>{errorMessage}</p>
                )}
                <Title size="p">
                    <Link to="/register">회원가입</Link>
                </Title>
            </div>
        </div>
    );
}
