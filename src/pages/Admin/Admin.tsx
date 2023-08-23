import { useState } from "react";
import styles from "./Admin.module.scss";
import Title from "../../components/Title/Title";
import AdminTable from "../../components/AdminTable/AdminTable";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import Button from "../../components/Button/Button";
import NewInput from "../../components/NewInput/NewInput";
import ToggleCheckBox from "../../components/ToggleCheckBox/ToggleCheckBox";
import TapMenu from "../../components/TapMenu/TapMenu";
import EditModal from "../../components/EditModal/EditModal";

export default function Admin() {
    const [data, setData] = useState([
        {
            id: 1,
            selected: false,
            imageUrl: "URL_1",
            area: "서울",
            category: "호텔",
            name: "숙소 1",
            description: "숙소 설명 1",
            price: 100,
        },
        {
            id: 2,
            selected: false,
            imageUrl: "URL_2",
            area: "제주",
            category: "펜션",
            name: "숙소 2",
            description: "숙소 설명 2",
            price: 150,
        },
    ]);

    //adminTable CRUD
    const handleEdit = (id: number) => {
        //수정 로직 구현
        console.log(`Edit clicked for ID ${id}`);
    };
    const handleDelete = (id: number) => {
        // 삭제 로직 구현
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
    };

    const handleAdd = () => {
        // 추가 로직 구현
        const newId = data.length + 1;
        const newEntry = {
            id: newId,
            selected: false,
            imageUrl: "URL_new",
            area: "새로운 지역",
            category: "새로운 카테고리",
            name: "새로운 숙소",
            description: "새로운 설명",
            price: 200,
        };

        setData([...data, newEntry]);
    };

    return (
        <>
            <Title size="h2" className={styles.title}>
                관리자 페이지(숙소리스트)
            </Title>
            <TapMenu></TapMenu>
            <AdminTable
                data={data}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onAdd={handleAdd}
                setData={setData}
            ></AdminTable>
            <DeleteModal className={styles.content}>
                <Title size="h2">숙소리스트 삭제</Title>
                <Title size="b">숙소리스트를 삭제하시겠습니까?</Title>
                <Button onClick={() => {}}>확인</Button>
            </DeleteModal>
            <AddWrap></AddWrap>
        </>
    );
}

//AddWrap 컴포넌트
function AddWrap() {
    //인풋 관리
    // const [selectedFile, setSelectedFile] = useState<File | null>(null);
    // const [inputText, setInputText] = useState<string | null>(null);

    // const handleFileChange = (file: File | null) => {
    //     setSelectedFile(file);
    // };

    // const handleTextChange = (text: string | null) => {
    //     setInputText(text);
    // };
    return (
        <EditModal className={styles.modal}>
            <div className={styles.addList}>
                <Title size="h2">숙소 리스트 추가</Title>
                <div className={styles.addWarp}>
                    <div className={styles.imgInput}>
                        <Title size="b">사진첨부</Title>
                        <NewInput type="file" onChange={() => {}} />
                    </div>
                    <div className={styles.check}>
                        <Title size="b">지역</Title>
                        <div className={styles.checkbox}>
                            <ToggleCheckBox></ToggleCheckBox>
                            <ToggleCheckBox></ToggleCheckBox>
                            <ToggleCheckBox></ToggleCheckBox>
                            <ToggleCheckBox></ToggleCheckBox>
                            <ToggleCheckBox></ToggleCheckBox>
                        </div>
                    </div>
                    <div className={styles.input}>
                        <Title size="b">숙소명</Title>
                        <NewInput type="text" onChange={() => {}} />
                    </div>
                    <div className={styles.input}>
                        <Title size="b">상세설명</Title>
                        <NewInput type="text" onChange={() => {}} />
                    </div>
                    <div className={styles.check}>
                        <Title size="b">카테고리</Title>
                        <div className={styles.checkbox}>
                            <ToggleCheckBox></ToggleCheckBox>
                            <ToggleCheckBox></ToggleCheckBox>
                            <ToggleCheckBox></ToggleCheckBox>
                            <ToggleCheckBox></ToggleCheckBox>
                            <ToggleCheckBox></ToggleCheckBox>
                        </div>
                    </div>
                </div>
                <Button onClick={() => {}}>확인</Button>
            </div>
        </EditModal>
    );
}
