import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import MainLargeButton from "../components/Button/MainLargeButton";
import MainButton from "../components/Button/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function Min() {
    return (
        <>
            <Title size="h1">
                <FontAwesomeIcon icon={faPen} />
                hello
            </Title>
            <Button>가입하기</Button>
            <MainLargeButton>테스트 하러가기</MainLargeButton>
            <MainButton>바로가기</MainButton>
        </>
    );
}
