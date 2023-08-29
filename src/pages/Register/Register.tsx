import { useEffect, useState } from "react";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import axiosRequest from "../../api";
import { AxiosResponse } from "axios";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import BorderButton from "../../components/Button/BorderButton";
import styles from "./Register.module.scss";

interface ValidationResponse {
    status: number;
    message: string;
}

export default function Register() {
    const [nickName, setNickName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [verificationCode, setVerificationCode] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    //닉네임
    const handleNameChange = (nickName: string) => {
        setNickName(nickName);
        console.log("닉네임", nickName);
    };
    //이메일
    const handleEmailChange = (email: string) => {
        setEmail(email);
        console.log("이메일", email);
    };
    //인증번호
    const handleVerificationCodeChange = (verificationCode: string) => {
        setVerificationCode(verificationCode);
        console.log("인증번호", verificationCode);
    };
    //비밀번호
    const handlePasswordChange = (password: string) => {
        setPassword(password);
        console.log("비밀번호", password);
    };
    //비밀번호확인
    const handleConfirmPasswordChange = (confirmPassword: string) => {
        setConfirmPassword(confirmPassword);
        console.log("비밀번호 확인", confirmPassword);
    };

    // const handleRegister = async () => {
    //     setErrorMessage(""); // 기존 오류 메시지 초기화

    //     if (!nickName || !email || !password || !confirmPassword) {
    //         setErrorMessage("누락된 값이 있습니다.");
    //         return;
    //     }

    //     if (!/\S+@\S+\.\S+/.test(email)) {
    //         setErrorMessage("이메일에는 @가 있어야합니다.");
    //         return;
    //     }

    //     if (password !== confirmPassword) {
    //         setErrorMessage("비밀번호가 일치하지 않습니다.");
    //         return;
    //     }

    //     if (!/(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d]).{6,10}$/.test(password)) {
    //         setErrorMessage("6~10자의 영문, 숫자, 특수문자를 포함해야 합니다.");
    //         return;
    //     }

    //     try {
    //         // API 호출: 이메일 중복 체크
    //         const emailCheckResponse: AxiosResponse<ValidationResponse> =
    //             await axiosRequest.requestAxios(
    //                 "get",
    //                 `/users/validator/email?email=${email}`
    //             );
    //         if (emailCheckResponse.status !== 200) {
    //             setErrorMessage("이미 사용 중인 이메일입니다.");
    //             return;
    //         }

    //         // API 호출: 닉네임 중복 체크
    //         const nicknameCheckResponse: AxiosResponse<ValidationResponse> =
    //             await axiosRequest.requestAxios(
    //                 "get",
    //                 `/users/validator/nickname?nickname=${nickName}`
    //             );
    //         if (nicknameCheckResponse.status !== 200) {
    //             setErrorMessage("이미 사용 중인 닉네임입니다.");
    //             return;
    //         }

    //         // API 호출: 회원가입
    //         const registerResponse = await axiosRequest.requestAxios(
    //             "post",
    //             "/users",
    //             {
    //                 email,
    //                 nickname: nickName,
    //                 password,
    //             }
    //         );

    //         // 성공 시 알림 표시 및 로그인 페이지로 이동
    //         alert("회원가입이 완료되었습니다.");
    //         // TODO: 로그인 페이지로 이동하는 코드 작성
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <form className={styles.registerWrap}>
            <Title size="h2">Tracter</Title>
            <Title size="h5">회원가입</Title>
            <div className={styles.name}>
                <Input
                    icon={<BiSolidUser />}
                    text={"닉네임"}
                    onChange={handleNameChange}
                />
                <BorderButton>중복확인</BorderButton>
            </div>
            <div className={styles.mail}>
                <Input
                    icon={<MdEmail />}
                    text={"이메일"}
                    onChange={handleEmailChange}
                />
                <BorderButton>메일발송</BorderButton>
            </div>
            <div className={styles.emailConfirmation}>
                <Input
                    icon={<MdMarkEmailRead />}
                    text={"인증번호"}
                    onChange={handleVerificationCodeChange}
                />
                <BorderButton>인증하기</BorderButton>
            </div>
            <Input
                icon={<AiFillLock />}
                text={"비밀번호"}
                className={styles.passwordinput}
                onChange={handlePasswordChange}
            />
            <Input
                icon={<AiFillLock />}
                text={"비밀번호 확인"}
                className={styles.passwordinput}
                onChange={handleConfirmPasswordChange}
            />
            <Button onClick={() => {}}>가입하기</Button>
        </form>
    );
}
