import { useState, useEffect } from "react";
import axiosRequest from "../../api";
import Title from "../../components/Title/Title";
import NewInput from "../../components/NewInput/NewInput";
import EditedInput from "../../components/EditedInput/EditedInput";
import Button from "../../components/Button/Button";
import TabButton from "../../components/TabButton/TabButton";
import styles from "./Admin.module.scss";

interface CategoryRspons {
    status: number;
    message: string;
    category?: {
        _id: string;
        categoryName: string;
    };
}

export default function AdminCategory() {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState("");
    // useEffect(() => {
    //     fetchCategories();
    // }, []);

    // const fetchCategories = async () => {
    //     try {
    //         const response = await axiosRequest.requestAxios(
    //             "get",
    //             "/categories"
    //         );
    //         setCategories(response.category || []);
    //     } catch (error) {
    //         console.error("카테고리 조회 실패:", error);
    //     }
    // };

    // const editCategory = async (categoryId, newValue) => {
    //     try {
    //         await axiosRequest.requestAxios(
    //             "patch",
    //             `/admin/categories/${categoryId}`,
    //             {
    //                 categoryName: newValue,
    //             }
    //         );
    //         fetchCategories();
    //     } catch (error) {
    //         console.error("카테고리 수정 실패:", error);
    //     }
    // };

    // const deleteCategory = async (categoryId) => {
    //     try {
    //         await axiosRequest.requestAxios(
    //             "delete",
    //             `/admin/categories/${categoryId}`
    //         );
    //         fetchCategories();
    //     } catch (error) {
    //         console.error("카테고리 삭제 실패:", error);
    //     }
    // };

    // const addCategory = async () => {
    //     if (newCategory) {
    //         try {
    //             await axiosRequest.requestAxios("post", "/admin/categories", {
    //                 categoryName: newCategory,
    //             });
    //             setNewCategory("");
    //             fetchCategories();
    //         } catch (error) {
    //             console.error("카테고리 추가 실패:", error);
    //         }
    //     }
    // };

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setNewCategory(e.target.value);
    // };

    return (
        <>
            <Title size="h2" className={styles.title}>
                관리자 페이지(카테고리)
            </Title>
            <TabButton></TabButton>
            <div className={styles.newInputWrap}>
                <Title size="b">카테고리 추가</Title>
                <div className={styles.inputBox}>
                    <NewInput type="text" onChange={() => {}} />
                    <Button onClick={() => {}}>추가</Button>
                </div>
            </div>
            <div className={styles.editedInputWrap}>
                <Title size="b">기존 카테고리</Title>
                <div className={styles.inputBox}>
                    <EditedInput value="호캉스"></EditedInput>
                    <div className={styles.buttonWrap}>
                        <Button onClick={() => {}}>수정</Button>
                        <Button onClick={() => {}}>삭제</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
