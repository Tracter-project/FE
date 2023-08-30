import React, { useState } from "react";
import { useCookies } from "react-cookie";
import axiosRequest from "../../api";
import Title from "../Title/Title";
import RadioButton from "../RadioButton/RadioButton";
import NewInput from "../NewInput/NewInput";
import { FaTimes } from "react-icons/fa";
import styles from "./AdminModal.module.scss";

interface ApiResponse {
    status: number;
    message: string;
}

interface AdminModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (
        placeName: string,
        price: number | null,
        description: string,
        category: string,
        region: string,
        bannerImage: string,
        mainImage: string,
        detailImage: string,
        bookingURL: string
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
        placeName: "",
        price: null,
        description: "",
        category: "",
        region: "",
        bannerImage: "",
        mainImage: "",
        detailImage: "",
        bookingURL: "",
    });

    const handleChange = (field: string, value: string | number | null) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }));
    };
    const [cookies] = useCookies(["token"]);
    const token = cookies.token;
    const handleConfirm = async () => {
        console.log(formData);
        try {
            // API 호출: 숙소 추가
            const response = await axiosRequest.requestAxios<ApiResponse>(
                "post",
                "/admin/places",
                {
                    placeName: formData.placeName,
                    price: formData.price,
                    description: formData.description,
                    category: formData.category,
                    region: formData.region,
                    bannerImage: formData.bannerImage,
                    mainImage: formData.mainImage,
                    detailImage: formData.detailImage,
                    bookingURL: formData.bookingURL,
                    token: token,
                }
            );
            if (response.status === 201) {
                console.log("숙소 등록 성공");
                onSelect(
                    formData.placeName,
                    formData.price,
                    formData.description,
                    formData.category,
                    formData.region,
                    formData.bannerImage,
                    formData.mainImage,
                    formData.detailImage,
                    formData.bookingURL
                );
                console.log("숙소 추가", formData);
            } else {
                console.log("숙소 등록 실패");
            }
        } catch (error) {
            console.log("에러", formData);
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
                    <div className={styles.textInput}>
                        <Title size="b">숙소명</Title>
                        <NewInput
                            type="text"
                            onChange={(placeName) =>
                                handleChange("placeName", placeName)
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
                    <div className={styles.textInput}>
                        <Title size="b">상세설명</Title>
                        <NewInput
                            type="text"
                            onChange={(description) =>
                                handleChange("description", description)
                            }
                        />
                    </div>
                    <div className={styles.check}>
                        <Title size="b">카테고리</Title>
                        <div className={styles.radio}>
                            {categories.map((category) => (
                                <RadioButton
                                    key={category}
                                    label={category}
                                    checked={formData.category === category}
                                    onChange={() =>
                                        handleChange("category", category)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.check}>
                        <Title size="b">지역</Title>
                        <div className={styles.radio}>
                            {regions.map((region) => (
                                <RadioButton
                                    key={region}
                                    label={region}
                                    checked={formData.region === region}
                                    onChange={() =>
                                        handleChange("region", region)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.textInput}>
                        <Title size="b">배너이미지</Title>
                        <NewInput
                            type="text"
                            onChange={(bannerImage) =>
                                handleChange("bannerImage", bannerImage)
                            }
                        />
                    </div>
                    <div className={styles.textInput}>
                        <Title size="b">메인이미지</Title>
                        <NewInput
                            type="text"
                            onChange={(mainImage) =>
                                handleChange("mainImage", mainImage)
                            }
                        />
                    </div>
                    <div className={styles.textInput}>
                        <Title size="b">상세이미지</Title>
                        <NewInput
                            type="text"
                            onChange={(detailImage) =>
                                handleChange("detailImage", detailImage)
                            }
                        />
                    </div>
                    <div className={styles.textInput}>
                        <Title size="b">예매링크</Title>
                        <NewInput
                            type="text"
                            onChange={(bookingURL) =>
                                handleChange("bookingURL", bookingURL)
                            }
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
