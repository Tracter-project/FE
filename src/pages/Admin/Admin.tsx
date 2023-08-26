import { useState } from "react";
import styles from "./Admin.module.scss";
import Title from "../../components/Title/Title";
import AdminTable from "../../components/AdminTable/AdminTable";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import Button from "../../components/Button/Button";
import TabButton from "../../components/TabButton/TabButton";
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

    return (
        <>
            <Title size="h2" className={styles.title}>
                관리자 페이지(숙소리스트)
            </Title>
            <TabButton></TabButton>
            <AdminTable
                data={data}
                // onEdit={handleEdit}
                // onDelete={handleDelete}
                // onAdd={handleAdd}
                setData={setData}
            ></AdminTable>
            {/* <DeleteModal className={styles.content}>
                <Title size="h2">숙소리스트 삭제</Title>
                <Title size="b">숙소리스트를 삭제하시겠습니까?</Title>
                <Button onClick={() => {}}>확인</Button>
            </DeleteModal> */}
            <EditModal className={styles.editModal}>{}</EditModal>
        </>
    );
}
