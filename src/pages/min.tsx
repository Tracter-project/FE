import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import MainLargeButton from "../components/Button/MainLargeButton";
import MainButton from "../components/Button/MainButton";
import BorderButton from "../components/Button/BorderButton";
import Input from "../components/Input/Input";
import CheckBox from "../components/CheckBox/CheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

export default function Min() {
    const [checkBoxChecked, setCheckBoxChecked] = useState(false);
    return (
        <>
            <Title size="h1">
                <FontAwesomeIcon icon={faPen} />
                hello
            </Title>
            <Button>가입하기</Button>
            <MainLargeButton>테스트 하러가기</MainLargeButton>
            <MainButton>바로가기</MainButton>
            <BorderButton>메일 발송</BorderButton>
            <Input icon={<MdEmail />} text={"이메일"} />
            <CheckBox
                checked={checkBoxChecked}
                onChange={() => setCheckBoxChecked(!checkBoxChecked)}
            ></CheckBox>
        </>
    );
}
