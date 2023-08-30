import React, { useState } from "react";
import axiosRequest from "../../api";
import Title from "../Title/Title";
import RadioButton from "../RadioButton/RadioButton";
import NewInput from "../NewInput/NewInput";
import { FaTimes } from "react-icons/fa";
import styles from "./AdminModal.module.scss";

interface ApiResponse {
    status: number;
    message: string;
    data: {
        fileUrl: string; // 실제 응답에 맞게 수정
    };
}

interface AdminModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (
        region: string,
        category: string,
        file: string,
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
    const [formData, setFormData] = useState({
        selectedRegion: "",
        selectedCategory: "",
        selectedFile: "",
        regionName: "",
        description: "",
        price: null,
    });

    const handleChange = (field: string, value: string | number | null) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }));
    };

    const handleConfirm = async () => {
        try {
            const response = await axiosRequest.requestAxios<ApiResponse>(
                "post",
                "/admin/places", // 실제 API 엔드포인트로 수정
                {
                    placeName: formData.regionName,
                    price: formData.price,
                    description: formData.description,
                    category: formData.selectedCategory,
                    region: formData.selectedRegion,
                    mainImage: formData.selectedFile,
                    // bannerImage: formData.bannerImage,
                    // detailImage: formData.detailImage,
                    // bookingURL: formData.bookingURL,
                }
            );

            if (response.status === 201) {
                console.log("숙소 등록 성공");
                // 여기서 선택한 데이터를 부모 컴포넌트로 전달
                onSelect(
                    formData.selectedRegion,
                    formData.selectedCategory,
                    response.data.fileUrl, // 이 부분은 실제 API 응답에 맞게 수정
                    formData.regionName,
                    formData.description,
                    formData.price
                );
            } else {
                console.log("숙소 등록 실패");
            }
        } catch (error) {
            console.error("API 호출 오류:", error);
        }
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
                        <NewInput
                            type="file"
                            onChange={(file) =>
                                handleChange("selectedFile", file)
                            }
                        />
                    </div>
                    <div className={styles.check}>
                        <Title size="b">지역</Title>
                        <div className={styles.radio}>
                            {regions.map((region) => (
                                <RadioButton
                                    key={region}
                                    label={region}
                                    checked={formData.selectedRegion === region}
                                    onChange={() =>
                                        handleChange("selectedRegion", region)
                                    }
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
                                    checked={
                                        formData.selectedCategory === category
                                    }
                                    onChange={() =>
                                        handleChange(
                                            "selectedCategory",
                                            category
                                        )
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.textInput}>
                        <Title size="b">숙소명</Title>
                        <NewInput
                            type="text"
                            onChange={(regionName) =>
                                handleChange("regionName", regionName)
                            }
                        />
                    </div>
                    <div className={styles.textInput}>
                        <Title size="b">상세설명</Title>
                        <NewInput
                            type="text"
                            onChange={(description) =>
                                handleChange("description", description)
                            }
                        />
                    </div>

                    <div className={styles.textInput}>
                        <Title size="b">가격</Title>
                        <NewInput
                            type="number"
                            onChange={(price) => handleChange("price", price)}
                        />
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
