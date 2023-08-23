import Title from "../../components/Title/Title";
import NewInput from "../../components/NewInput/NewInput";
import EditedInput from "../../components/EditedInput/EditedInput";
import Button from "../../components/Button/Button";
import styles from "./Admin.module.scss";
import TapMenu from "../../components/TapMenu/TapMenu";

function NewInputWrap() {
    return (
        <div className={styles.newInputWrap}>
            <Title size="b">카테고리 추가</Title>
            <div className={styles.inputBox}>
                <NewInput type="text" onChange={() => {}} />
                <Button onClick={() => {}}>추가</Button>
            </div>
        </div>
    );
}

function EditedInputWrap() {
    return (
        <div className={styles.editedInputWrap}>
            <Title size="b">기존 카테고리</Title>
            <div className={styles.inputBox}>
                <EditedInput value="호캉스"></EditedInput>
                <div className={styles.buttonWrap}>
                    <Button onClick={() => {}}>수정</Button>
                    <Button onClick={() => {}}>삭제</Button>
                </div>
            </div>
        </div>
    );
}

export default function AdminCategory() {
    return (
        <>
            <Title size="h2" className={styles.title}>
                관리자 페이지(카테고리)
            </Title>
            <TapMenu></TapMenu>
            <NewInputWrap></NewInputWrap>
            <EditedInputWrap></EditedInputWrap>
        </>
    );
}
