import React, { useState } from "react";
import Title from "../Title/Title";
import AddButton from "../AddButton/AddButton";
import ModifyButton from "../ModifyButton/ModifyButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import CheckBox from "../CheckBox/CheckBox";
import NewInput from "../NewInput/NewInput";
import Button from "../Button/Button";
import RadioButton from "../RadioButton/RadioButton";
import styles from "./AdminTable.module.scss";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../recoli/recoilAtoms";

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
    //radio 버튼
    const [selectedRegion, setSelectedRegion] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const handleRegionChange = (region: string) => {
        console.log("지역바뀜:", region);
        setSelectedRegion(region);
    };
    console.log(handleRegionChange);

    const handleCategoryChange = (category: string) => {
        console.log("지역바뀜:", category);
        setSelectedCategory(category);
    };

    const handleSelection = () => {
        if (selectedRegion && selectedCategory) {
            // console.log("선택된 지역:", selectedRegion);
            // console.log("선택된 카테고리:", selectedCategory);
        }
    };
    //modal창
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
                            <NewInput type="file" onChange={() => {}} />
                        </div>
                        <div className={styles.check}>
                            <Title size="b">지역</Title>
                            <div className={styles.checkbox}>
                                <RadioButton
                                    label="서울"
                                    checked={selectedRegion === "서울"}
                                    onChange={() => handleRegionChange("서울")}
                                />
                                <RadioButton
                                    label="강원"
                                    checked={selectedRegion === "강원"}
                                    onChange={() => handleRegionChange("강원")}
                                />
                                <RadioButton
                                    label="전라"
                                    checked={selectedRegion === "전라"}
                                    onChange={() => handleRegionChange("전라")}
                                />
                                <RadioButton
                                    label="경상"
                                    checked={selectedRegion === "경상"}
                                    onChange={() => handleRegionChange("경상")}
                                />
                                <RadioButton
                                    label="제주"
                                    checked={selectedRegion === "제주"}
                                    onChange={() => handleRegionChange("제주")}
                                />
                            </div>
                        </div>
                        <div className={styles.check}>
                            <Title size="b">카테고리</Title>
                            <div className={styles.checkbox}>
                                <RadioButton
                                    label="호캉스"
                                    checked={selectedCategory === "호캉스"}
                                    onChange={() =>
                                        handleCategoryChange("호캉스")
                                    }
                                />
                                <RadioButton
                                    label="글램핑"
                                    checked={selectedCategory === "글램핑"}
                                    onChange={() =>
                                        handleCategoryChange("글램핑")
                                    }
                                />
                                <RadioButton
                                    label="풀빌라"
                                    checked={selectedCategory === "풀빌라"}
                                    onChange={() =>
                                        handleCategoryChange("풀빌라")
                                    }
                                />
                                <RadioButton
                                    label="게스트 하우스"
                                    checked={
                                        selectedCategory === "게스트 하우스"
                                    }
                                    onChange={() =>
                                        handleRegionChange("게스트 하우스")
                                    }
                                />
                                <RadioButton
                                    label="카라반"
                                    checked={selectedCategory === "카라반"}
                                    onChange={() =>
                                        handleCategoryChange("카라반")
                                    }
                                />
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
                        <div className={styles.input}>
                            <Title size="b">가격</Title>
                            <NewInput type="text" onChange={() => {}} />
                        </div>
                    </div>
                    <Button onClick={handleSelection}>확인</Button>
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
