import React, { useState } from "react";
import Title from "../Title/Title";
import RadioButton from "../RadioButton/RadioButton";
import NewInput from "../NewInput/NewInput";
import { FaTimes } from "react-icons/fa";
import styles from "./AdminModal.module.scss";

interface AdminModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (
        region: string,
        category: string,
        file: File | null,
        regionName: string,
        description: string,
        price: number | null
    ) => void;
}

const regions = ["서울", "강원", "전라", "경상", "제주"];
const categories = ["호캉스", "글램핑", "풀빌라", "게스트하우스", "카라반"];

export default function AdminModal({
    isOpen,
    onClose,
    onSelect,
}: AdminModalProps) {
    const [selectedRegion, setSelectedRegion] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [regionName, setRegionName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number | null>(null);

    const handleRegionChange = (region: string) => {
        setSelectedRegion(region);
    };
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const handleFileChange = (file: File | null) => {
        setSelectedFile(file);
    };

    const handleRegionNameChange = (text: string) => {
        setRegionName(text);
    };

    const handleDescriptionChange = (text: string) => {
        setDescription(text);
    };

    const handlePriceChange = (value: number | null) => {
        setPrice(value);
    };

    const handleConfirm = () => {
        console.log("지역", selectedRegion);
        console.log("카테고리", selectedCategory);
        console.log("파일", selectedFile);
        console.log("숙소명", regionName);
        console.log("상세설명", description);
        console.log("가격", price);
        onSelect(
            selectedRegion,
            selectedCategory,
            selectedFile,
            regionName,
            description,
            price
        );
        onClose();
    };

    return isOpen ? (
        <div className={styles.modal}>
            <div className={styles.backDrop} onClick={onClose}></div>
            <div className={styles.modalContent}>
                <div className={styles.modalBox}>
                    <button className={styles.closeBtn} onClick={onClose}>
                        <FaTimes className={styles.closeBtn} />
                    </button>
                    <Title size="h2">숙소 리스트 추가</Title>
                    <div className={styles.imgInput}>
                        <Title size="b">사진첨부</Title>
                        <NewInput type="file" onChange={handleFileChange} />
                    </div>
                    <div className={styles.check}>
                        <Title size="b">지역</Title>
                        <div className={styles.radio}>
                            {regions.map((region) => (
                                <RadioButton
                                    key={region}
                                    label={region}
                                    checked={selectedRegion === region}
                                    onChange={() => handleRegionChange(region)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.check}>
                        <Title size="b">카테고리</Title>
                        <div className={styles.radio}>
                            {categories.map((category) => (
                                <RadioButton
                                    key={category}
                                    label={category}
                                    checked={selectedCategory === category}
                                    onChange={() =>
                                        handleCategoryChange(category)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.textInput}>
                        <Title size="b">숙소명</Title>
                        <NewInput
                            type="text"
                            onChange={handleRegionNameChange}
                        />
                    </div>
                    <div className={styles.textInput}>
                        <Title size="b">상세설명</Title>
                        <NewInput
                            type="text"
                            onChange={handleDescriptionChange}
                        />
                    </div>

                    <div className={styles.textInput}>
                        <Title size="b">가격</Title>
                        <NewInput type="number" onChange={handlePriceChange} />
                    </div>

                    <button
                        className={styles.confirmBtn}
                        onClick={handleConfirm}
                    >
                        <Title size="b">확인</Title>
                    </button>
                </div>
            </div>
        </div>
    ) : null;
}
