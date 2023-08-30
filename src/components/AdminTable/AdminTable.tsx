import React, { useState, useEffect } from "react";
import axiosRequest from "../../api";
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
        console.log(region, category);
    };
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    // 선택한 아이디 업데이트
    useEffect(() => {
        const selected = data
            .filter((item) => item.selected)
            .map((item) => item.id);
        setSelectedIds(selected);
    }, [data]);
    // 숙소 수정 요청
    const handleEdit = async () => {
        // 선택한 숙소들의 아이디 리스트(selectedIds)를 활용하여 API 호출
        try {
            const response = await axiosRequest.requestAxios(
                "patch",
                "/admin/places",
                {
                    placeIds: selectedIds,
                    // 추가적인 수정 데이터들을 보내주세요
                }
            );
            console.log("숙소 수정 성공:", response);
            // 수정 성공 시 처리
        } catch (error) {
            console.error("숙소 수정 실패:", error);
            // 에러 처리
        }
    };

    // 숙소 삭제 요청
    const handleDelete = async () => {
        // 선택한 숙소들의 아이디 리스트(selectedIds)를 활용하여 API 호출
        try {
            const response = await axiosRequest.requestAxios(
                "delete",
                "/admin/places",
                {
                    placeIds: selectedIds,
                }
            );
            console.log("숙소 삭제 성공:", response);
            // 삭제 성공 시 처리
        } catch (error) {
            console.error("숙소 삭제 실패:", error);
            // 에러 처리
        }
    };
    return (
        <>
            <div className={styles.tableWrap}>
                <div className={styles.buttonIcon}>
                    <AddButton onClick={handleOpenModal}></AddButton>

                    <ModifyButton onClick={handleEdit}></ModifyButton>

                    <DeleteButton onClick={handleDelete}></DeleteButton>
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
