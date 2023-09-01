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

interface AdminEditModalProps {
    isOpen: boolean;
    onClose: () => void;

    modalData: Place;
}

const regions = ["서울", "강원", "전라", "경상", "제주"];
const categories = ["호캉스", "글램핑", "풀빌라", "게스트하우스", "카라반"];

export default function AdminEditModal({
    isOpen,
    onClose,
    modalData,
}: AdminEditModalProps) {
    const [formData, setFormData] = useState({
        id: modalData.id || 0,
        placeName: modalData.placeName || "",
        price: modalData.price || null,
        description: modalData.description || "",
        category: modalData.category || "",
        region: modalData.region || "",
        bannerImage: modalData.bannerImage || "",
        mainImage: modalData.mainImage || "",
        detailImage: modalData.detailImage || "",
        bookingURL: modalData.bookingURL || "",
    });
    //토큰
    const [cookies] = useCookies(["token"]);
    const token = cookies.token;

    const handleChange = (field: string, value: string | number | null) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }));
    };

    const handleConfirm = async () => {
        console.log("ww", formData);
        try {
            const response = await axiosRequest.requestAxios<ApiResponse>(
                "patch",
                "/admin/places",
                {
                    id: formData.id,
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

            if (response.status === 200) {
                console.log("숙소 수정 성공");
            }
        } catch (error) {
            console.error("숙소 수정 실패:", error);
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
                    <Title size="h2">숙소 리스트 수정</Title>
                    <div className={styles.textInput}>
                        <Title size="b">숙소명</Title>
                        <NewInput
                            type="text"
                            value={formData.placeName}
                            onChange={(placeName) =>
                                handleChange("placeName", placeName)
                            }
                        />
                    </div>
                    <div className={styles.textInput}>
                        <Title size="b">가격</Title>
                        <NewInput
                            type="number"
                            value={formData.price || ""}
                            onChange={(price) => handleChange("price", price)}
                        />
                    </div>
                    <div className={styles.textInput}>
                        <Title size="b">상세설명</Title>
                        <NewInput
                            type="text"
                            value={formData.description}
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
                            value={formData.bannerImage}
                            onChange={(bannerImage) =>
                                handleChange("bannerImage", bannerImage)
                            }
                        />
                    </div>
                    <div className={styles.textInput}>
                        <Title size="b">메인이미지</Title>
                        <NewInput
                            type="text"
                            value={formData.mainImage}
                            onChange={(mainImage) =>
                                handleChange("mainImage", mainImage)
                            }
                        />
                    </div>
                    <div className={styles.textInput}>
                        <Title size="b">상세이미지</Title>
                        <NewInput
                            type="text"
                            value={formData.detailImage}
                            onChange={(detailImage) =>
                                handleChange("detailImage", detailImage)
                            }
                        />
                    </div>
                    <div className={styles.textInput}>
                        <Title size="b">예매링크</Title>
                        <NewInput
                            type="text"
                            value={formData.bookingURL}
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
