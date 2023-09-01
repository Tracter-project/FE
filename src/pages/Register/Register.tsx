import { useNavigate } from "react-router-dom";
import { useEffect, useState, MouseEvent } from "react";
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
    //닉네임, 이메일, 이메일인증,비밀번호, 비밀번호 확인
    const [registerForm, setRegisterForm] = useState({
        nickName: "",
        email: "",
        // verificationCode: "",
        password: "",
        confirmPassword: "",
    });
    //오류 메세지
    const [validMessage, setValidMessage] = useState({
        nickNameMessage: "",
        emailMessage: "",
        // verificationCodeMessage: "",
        passwordMessage: "",
        confirmPasswordMessage: "",
    });
    //유효성 검사
    const [isValid, setIsValid] = useState({
        nickName: false,
        email: false,
        // verificationCode: false,
        password: false,
        confirmPassword: false,
    });

    //닉네임, 이메일, 이메일인증,비밀번호, 비밀번호 유효성검사
    const handleChange = (name: string, value: string) => {
        setRegisterForm({ ...registerForm, [name]: value });

        // 닉네임 유효성 검사
        if (name === "nickName") {
            if (value === "") {
                setValidMessage((prev) => ({
                    ...prev,
                    nickNameMessage: "*닉네임을 입력해주세요.",
                }));
                setIsValid({ ...isValid, nickName: false });
            } else {
                setValidMessage((prev) => ({
                    ...prev,
                    nickNameMessage: "",
                }));
                setIsValid({ ...isValid, nickName: true });
            }
        }

        // 이메일 유효성 검사
        if (name === "email") {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValidEmail = regex.test(value);

            if (!isValidEmail) {
                setValidMessage((prev) => ({
                    ...prev,
                    emailMessage: "*올바른 이메일 형식이 아닙니다.",
                }));
                setIsValid({ ...isValid, email: false });
            } else {
                setValidMessage((prev) => ({
                    ...prev,
                    emailMessage: "",
                }));
                setIsValid({ ...isValid, email: true });
            }
        }

        // 비밀번호 유효성 검사
        if (name === "password") {
            validatePassword(value);
        }

        // 비밀번호 확인 유효성 검사
        if (name === "confirmPassword") {
            validateConfirmPassword(value);
        }
        console.log(registerForm);
    };

    // 닉네임중복확인 api
    const handleNicknameCheck = async () => {
        if (registerForm.nickName === "") {
            setValidMessage((prev) => ({
                ...prev,
                nickNameMessage: "*닉네임을 입력해주세요.",
            }));
            return;
        }
        try {
            // API 호출: 닉네임 중복 체크
            const nickname = registerForm.nickName;
            console.log("dd", nickname);
            const nicknameResponse: AxiosResponse =
                await axiosRequest.requestAxios(
                    "get",
                    `/users/validator/${nickname}`
                );
            if (nicknameResponse.status === 200) {
                console.log(nicknameResponse.data.message);
                alert("사용 가능한 닉네임입니다.");
            } else if (nicknameResponse.status === 400) {
                console.log(nicknameResponse.data);
                setValidMessage((prev) => ({
                    ...prev,
                    nickNameMessage: "이미 사용 중인 닉네임입니다.",
                }));
            }
        } catch (error) {
            console.error(error);
            alert("닉네임을 입력해주세요.");
        }
    };

    // 이메일중복확인 api
    const handleEmailSend = async () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = regex.test(registerForm.email);
        if (!isValidEmail) {
            setValidMessage((prev) => ({
                ...prev,
                emailMessage: "*올바른 이메일 형식이 아닙니다.",
            }));
            return;
        }
        try {
            // API 호출: 이메일 중복 체크
            const email = registerForm.email;

            const emailResponse: AxiosResponse =
                await axiosRequest.requestAxios(
                    "get",
                    `/users/validator/${email}`
                );
            if (emailResponse.status === 200) {
                console.log(emailResponse.data.message);
                alert("사용가능한 이메일입니다.");
            } else if (emailResponse.status === 400) {
                console.log(emailResponse.data.message);
                setValidMessage((prev) => ({
                    ...prev,
                    emailMessage: "이미 사용중인 이메일입니다.",
                }));
            }
        } catch (error) {
            console.error(error);
        }
    };

    //비밀번호
    const validatePassword = (password: string) => {
        const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,15}$/;

        if (!regex.test(password)) {
            setValidMessage((prev) => ({
                ...prev,
                passwordMessage:
                    "*숫자, 영문, 특수문자를 포함하여 최소 8자를 입력해주세요.",
            }));
            setIsValid({ ...isValid, password: false });
        } else {
            setValidMessage((prev) => ({
                ...prev,
                passwordMessage: "",
            }));
            setIsValid({ ...isValid, password: true });
        }
    };

    //비밀번호 확인
    const validateConfirmPassword = (confirmPassword: string) => {
        if (confirmPassword !== registerForm.password) {
            setValidMessage((prev) => ({
                ...prev,
                confirmPasswordMessage: "*비밀번호가 일치하지 않습니다.",
            }));
            setIsValid({ ...isValid, confirmPassword: false });
        } else {
            setValidMessage((prev) => ({
                ...prev,
                confirmPasswordMessage: "",
            }));
            setIsValid({ ...isValid, confirmPassword: true });
        }
    };

    const navigate = useNavigate();
    //회원가입
    const handleRegister = async (e?: MouseEvent) => {
        if (e) {
            e.preventDefault();
        }
        if (
            !isValid.nickName ||
            !isValid.email ||
            !isValid.password ||
            !isValid.confirmPassword
        ) {
            return console.log(isValid);
        }

        try {
            // API 호출: 회원가입
            const registerData = {
                email: registerForm.email,
                password: registerForm.password,
                nickname: registerForm.nickName,
            };
            const registerResponse: AxiosResponse<ValidationResponse> =
                await axiosRequest.requestAxios("post", "/users", registerData);
            console.log(registerResponse);

            if (registerResponse.status === 201) {
                console.log(registerResponse.data.message); // 가입 완료
                console.log("회원가입 응답:", registerResponse);
                // 성공 시 알림 표시 및 로그인 페이지로 이동
                alert("회원가입이 완료되었습니다.");
                navigate("/login");
            } else if (registerResponse.status === 400) {
                console.log(registerResponse.data.message);
            } else if (registerResponse.status === 409) {
                console.log(registerResponse.data.message);

                if (
                    registerResponse.data.message.includes(
                        "이미 사용 중인 이메일"
                    )
                ) {
                    setValidMessage((prev) => ({
                        ...prev,
                        emailMessage: "이미 사용 중인 이메일입니다.",
                    }));
                }
                if (
                    registerResponse.data.message.includes(
                        "이미 사용 중인 닉네임"
                    )
                ) {
                    setValidMessage((prev) => ({
                        ...prev,
                        nickNameMessage: "이미 사용 중인 닉네임입니다.",
                    }));
                }
            }
        } catch (error) {
            console.error(error);
            alert("회원가입이 실패하였습니다.");
        }
    };

    return (
        <div className={styles.registerWrap}>
            <Title size="h2">Tracter</Title>
            <Title size="h5">회원가입</Title>
            <div className={styles.name}>
                <Input
                    type={"text"}
                    icon={<BiSolidUser />}
                    text={"닉네임"}
                    value={registerForm.nickName}
                    onChange={(value) => handleChange("nickName", value)}
                />
                <BorderButton onClick={handleNicknameCheck}>
                    중복확인
                </BorderButton>
            </div>
            {isValid.nickName === false && (
                <p className={styles.errorMessage}>
                    {validMessage.nickNameMessage}
                </p>
            )}
            <div className={styles.mail}>
                <Input
                    type={"text"}
                    icon={<MdEmail />}
                    text={"이메일"}
                    value={registerForm.email}
                    onChange={(value) => handleChange("email", value)}
                />
                <BorderButton onClick={handleEmailSend}>중복확인</BorderButton>
            </div>
            {isValid.email === false && (
                <p className={styles.errorMessage}>
                    {validMessage.emailMessage}
                </p>
            )}
            {/* <div className={styles.emailConfirmation}>
                <Input
                    icon={<MdMarkEmailRead />}
                    text={"인증번호"}
                    value={registerForm.verificationCode}
                    onChange={(value) =>
                        handleChange("verificationCode", value)
                    }
                />
                <BorderButton>인증하기</BorderButton>
            </div> */}
            <Input
                type={"password"}
                icon={<AiFillLock />}
                text={"비밀번호"}
                className={styles.passwordinput}
                value={registerForm.password}
                onChange={(value) => handleChange("password", value)}
            />
            {isValid.password === false && (
                <p className={styles.errorMessage}>
                    {validMessage.passwordMessage}
                </p>
            )}
            <Input
                type={"password"}
                icon={<AiFillLock />}
                text={"비밀번호 확인"}
                className={styles.passwordinput}
                value={registerForm.confirmPassword}
                onChange={(value) => handleChange("confirmPassword", value)}
            />
            {isValid.confirmPassword === false && (
                <p className={styles.errorMessage}>
                    {validMessage.confirmPasswordMessage}
                </p>
            )}
            <Button onClick={handleRegister}>가입하기</Button>
        </div>
    );
}
