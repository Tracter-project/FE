import React from "react";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../recoil/recoilAtoms";
import Title from "../Title/Title";
import AddButton from "../AddButton/AddButton";
import ModifyButton from "../ModifyButton/ModifyButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import CheckBox from "../CheckBox/CheckBox";
import NewInput from "../NewInput/NewInput";
import ToggleCheckBox from "../../components/ToggleCheckBox/ToggleCheckBox";
import Button from "../Button/Button";
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
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, selected: !item.selected } : item
        );
        setData(updatedData);
    };

    const setModal = useSetRecoilState(modalState);

    const handleButtonClick = () => {
        setModal({
            isOpen: true,
            content: (
                <div className={styles.addList}>
                    <Title size="h2">숙소 리스트 추가</Title>
                    <div className={styles.addWarp}>
                        <div className={styles.imgInput}>
                            <Title size="b">사진첨부</Title>
                            <NewInput
                                value=""
                                type="file"
                                onChange={() => {}}
                            />
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
                        <div className={styles.input}>
                            <Title size="b">숙소명</Title>
                            <NewInput
                                value=""
                                type="text"
                                onChange={() => {}}
                            />
                        </div>
                        <div className={styles.input}>
                            <Title size="b">상세설명</Title>
                            <NewInput
                                value=""
                                type="text"
                                onChange={() => {}}
                            />
                        </div>
                        <div className={styles.input}>
                            <Title size="b">가격</Title>
                            <NewInput
                                value=""
                                type="text"
                                onChange={() => {}}
                            />
                        </div>
                    </div>
                    <Button onClick={() => {}}>확인</Button>
                </div>
            ),
        });
    };

    return (
        <div className={styles.tableWrap}>
            <div className={styles.buttonIcon}>
                <AddButton onClick={handleButtonClick}></AddButton>

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
    );
}
