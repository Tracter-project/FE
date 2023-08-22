import Title from "../../components/Title/Title";
import NewInput from "../../components/NewInput/NewInput";
import EditedInput from "../../components/EditedInput/EditedInput";
import Button from "../../components/Button/Button";
import styles from "./Admin.module.scss";

function NewInputWrap() {
    return (
        <div className={styles.newInputWrap}>
            <Title size="b">카테고리 추가</Title>
            <div className={styles.inputBox}>
                <NewInput></NewInput>
                <Button>추가</Button>
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
            <NewInputWrap></NewInputWrap>
            <EditedInput value="호캉스"></EditedInput>
            <Button>수정</Button>
            <Button>삭제</Button>
        </>
    );
}
