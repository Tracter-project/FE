import React, { useState } from "react";
import Title from "../Title/Title";
import AddButton from "../AddButton/AddButton";
import ModifyButton from "../ModifyButton/ModifyButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import CheckBox from "../CheckBox/CheckBox";
import AdminModal from "../AdminModal/AdminModal";
import styles from "./AdminTable.module.scss";

interface AdminTableProps {
    data: {
        id: number;
        selected: boolean;
        imageUrl: string;
        area: string;
        category: string;
        name: string;
        description: string;
        price: number;
    }[];
    setData: React.Dispatch<
        React.SetStateAction<
            {
                id: number;
                selected: boolean;
                imageUrl: string;
                area: string;
                category: string;
                name: string;
                description: string;
                price: number;
            }[]
        >
    >;
}

export default function AdminTable({ data, setData }: AdminTableProps) {
    // 체크박스
    const handleCheckboxChange = (id: number) => {
        console.log("숙소선택", id);
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, selected: !item.selected } : item
        );
        setData(updatedData);
    };
    //AdminModal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSelect = (region: string, category: string) => {
        setSelectedRegion(region);
        setSelectedCategory(category);
    };

    return (
        <>
            <div className={styles.tableWrap}>
                <div className={styles.buttonIcon}>
                    <AddButton onClick={handleOpenModal}></AddButton>

                    <ModifyButton onClick={() => {}}></ModifyButton>

                    <DeleteButton onClick={() => {}}></DeleteButton>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>
                                <Title size="p">선택</Title>
                            </th>
                            <th>
                                <Title size="p">사진</Title>
                            </th>
                            <th>
                                <Title size="p">지역</Title>
                            </th>
                            <th>
                                <Title size="p">카테고리</Title>
                            </th>
                            <th>
                                <Title size="p">숙소명</Title>
                            </th>
                            <th>
                                <Title size="p">상세설명</Title>
                            </th>
                            <th>
                                <Title size="p">가격</Title>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <CheckBox
                                        checked={item.selected}
                                        onChange={() =>
                                            handleCheckboxChange(item.id)
                                        }
                                    ></CheckBox>
                                </td>
                                <td>
                                    <img src={item.imageUrl} alt={item.name} />
                                </td>
                                <td>{item.area}</td>
                                <td>{item.category}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <AdminModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSelect={handleSelect}
            />
        </>
    );
}
