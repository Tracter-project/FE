import Title from "../../components/Title/Title";
import AdminTable from "../../components/AdminTable/AdminTable";
import { useState } from "react";
import styles from "./Admin.module.scss";

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
            <AdminTable
                data={data}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onAdd={handleAdd}
                setData={setData}
            ></AdminTable>
        </>
    );
}
