import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axiosRequest from "../../api";
import Title from "../Title/Title";
import AddButton from "../AddButton/AddButton";
import ModifyButton from "../ModifyButton/ModifyButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import CheckBox from "../CheckBox/CheckBox";
import AdminModal from "../AdminModal/AdminModal";
import AdminEditModal from "../AdminModal/AdminEditModal";
import styles from "./AdminTable.module.scss";

interface AdminTableProps {
    data: Place[];
    setData: React.Dispatch<React.SetStateAction<Place[]>>;
}

interface Place {
    id: number;
    placeName: string;
    price: number | null;
    description: string;
    category: string;
    region: string;
    placeLikeCount: number | null;
    bannerImage: string;
    mainImage: string;
    detailImage: string;
    bookingURL: string;
}
export default function AdminTable({ data, setData }: AdminTableProps) {
    //토큰
    const [cookies] = useCookies(["token"]);
    const token = cookies.token;

    //AdminModal
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    //모달수정시 담을 데이터
    const [modalData, setModalData] = useState<Place>({
        id: 0,
        placeName: "",
        price: null,
        description: "",
        category: "",
        region: "",
        placeLikeCount: null,
        bannerImage: "",
        mainImage: "",
        detailImage: "",
        bookingURL: "",
    });

    //선택아이디
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    // 체크박스
    const handleCheckboxChange = (id: number) => {
        const updatedSelectedIds = selectedIds.includes(id)
            ? selectedIds.filter((selectedId) => selectedId !== id)
            : [...selectedIds, id];
        setSelectedIds(updatedSelectedIds);
    };

    const handleOpenAddModal = () => {
        setIsAddModalOpen(true);
    };
    //추가모달 닫기
    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
    };

    //수정모달 닫기
    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    };

    //숙소 수정 선택
    const handleEditSelect = (id: number) => {
        if (data.length > 0) {
            if (selectedIds.length === 1) {
                const selectedItem = data.find(
                    (item) => item.id === selectedIds[0]
                );
                if (selectedItem) {
                    setModalData(selectedItem);
                    const updatedSelectedIds = selectedIds.includes(id)
                        ? selectedIds.filter((selectedId) => selectedId !== id)
                        : [...selectedIds, id];
                    setSelectedIds(updatedSelectedIds);
                    setIsEditModalOpen(true);
                }
            }
        }
    };

    // 숙소 삭제 요청
    const handleDelete = async () => {
        try {
            const response = await axiosRequest.requestAxios(
                "delete",
                "/admin/places",
                {
                    id: selectedIds,
                    token: token,
                }
            );
            alert("숙소가 삭제되었습니다.");
        } catch (error) {
            alert("숙소 삭제를 실패하였습니다.");
        }
    };

    return (
        <>
            <div className={styles.tableWrap}>
                <div className={styles.buttonIcon}>
                    <AddButton onClick={handleOpenAddModal}></AddButton>

                    <ModifyButton
                        onClick={() => handleEditSelect(selectedIds[0])}
                    ></ModifyButton>

                    <DeleteButton onClick={handleDelete}></DeleteButton>
                </div>
                <table className={styles.table}>
                    <colgroup>
                        <col style={{ width: "50px" }} />{" "}
                        {/* 첫 번째 열 너비 */}
                        <col style={{ width: "150px" }} />
                        <col style={{ width: "60px" }} />
                        <col style={{ width: "300px" }} />
                        <col style={{ width: "60px" }} />
                        <col style={{ width: "60px" }} />
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "100px" }} />
                        {/* 나머지 열에 대한 너비 설정 */}
                    </colgroup>
                    <thead>
                        <tr>
                            <th>
                                <Title size="p">선택</Title>
                            </th>
                            <th>
                                <Title size="p">숙소명</Title>
                            </th>
                            <th>
                                <Title size="p">가격</Title>
                            </th>
                            <th>
                                <Title size="p">상세설명</Title>
                            </th>
                            <th>
                                <Title size="p">카테고리</Title>
                            </th>
                            <th>
                                <Title size="p">지역</Title>
                            </th>
                            <th>
                                <Title size="p">배너이미지</Title>
                            </th>
                            <th>
                                <Title size="p">메인이미지</Title>
                            </th>
                            <th>
                                <Title size="p">상세이미지</Title>
                            </th>
                            <th>
                                <Title size="p">예매링크</Title>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 &&
                            data.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            <CheckBox
                                                checked={selectedIds.includes(
                                                    item.id
                                                )}
                                                onChange={() =>
                                                    handleCheckboxChange(
                                                        item.id
                                                    )
                                                }
                                            ></CheckBox>
                                        </td>
                                        <td>{item.placeName}</td>
                                        <td>{item.price}</td>
                                        <td>{item.description}</td>
                                        <td>{item.category}</td>
                                        <td>{item.region}</td>

                                        <td>
                                            <img
                                                src={item.bannerImage}
                                                alt={item.placeName}
                                                style={{
                                                    maxWidth: "100px",
                                                    maxHeight: "100px",
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <img
                                                src={item.mainImage}
                                                alt={item.placeName}
                                                style={{
                                                    maxWidth: "100px",
                                                    maxHeight: "100px",
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <img
                                                src={item.detailImage}
                                                alt={item.placeName}
                                                style={{
                                                    maxWidth: "100px",
                                                    maxHeight: "100px",
                                                }}
                                            />
                                        </td>
                                        <td className={styles.link}>
                                            <Link to={item.bookingURL}>
                                                {`${item.placeName} 링크`}
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
            {/* 추가모달 */}
            <AdminModal isOpen={isAddModalOpen} onClose={handleCloseAddModal} />
            <AdminEditModal
                isOpen={isEditModalOpen}
                onClose={handleCloseEditModal}
                modalData={modalData}
            />
        </>
    );
}
