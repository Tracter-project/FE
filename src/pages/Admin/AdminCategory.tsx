import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axiosRequest from "../../api";
import Title from "../../components/Title/Title";
import NewInput from "../../components/NewInput/NewInput";
import EditedInput from "../../components/EditedInput/EditedInput";
import Button from "../../components/Button/Button";
import TabButton from "../../components/TabButton/TabButton";
import styles from "./Admin.module.scss";
import { AxiosResponse } from "axios";

interface Category {
    _id: number;
    categoryName: string;
}
interface CategoryResponse {
    status: number;
    message: string;
    category: Category[];
}

export default function AdminCategory() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [newCategory, setNewCategory] = useState("");
    const [cookies] = useCookies(["token"]);
    const token = cookies.token;
    useEffect(() => {
        console.log("전체조회다", categories);
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const categoryResponse: AxiosResponse<CategoryResponse> =
                await axiosRequest.requestAxios("get", "/categories");
            console.log("카테고리", categoryResponse.data);
            setCategories(categoryResponse.data.category);
            console.log("카테고리 조회 성공");
        } catch (error) {
            console.error("카테고리 조회 실패:", error);
        }
    };

    const editCategory = async (
        categoryId: number,
        newCategoryName: string
    ) => {
        try {
            await axiosRequest.requestAxios(
                "patch",
                `/admin/categories/${categoryId}`,
                {
                    categoryName: newCategoryName,
                    token: token,
                }
            );
            fetchCategories();
            console.log("수정");
        } catch (error) {
            console.error("카테고리 수정 실패:", error);
        }
    };

    const deleteCategory = async (categoryId: number) => {
        try {
            await axiosRequest.requestAxios(
                "delete",
                `/admin/categories/${categoryId}`,
                { token: token }
            );
            console.log("삭제");
            fetchCategories();
        } catch (error) {
            console.error("카테고리 삭제 실패:", error);
        }
    };

    const addCategory = async () => {
        if (newCategory) {
            console.log("추가합시다", newCategory);
            try {
                const categoryResponse: AxiosResponse<CategoryResponse> =
                    await axiosRequest.requestAxios(
                        "post",
                        "/admin/categories",
                        {
                            categoryName: newCategory,
                            token: token,
                        }
                    );
                console.log("추가", categoryResponse);
                setNewCategory("");
                fetchCategories();
                alert("카테고리가 추가되었습니다.");
            } catch (error) {
                console.error("카테고리 추가 실패:", error);
            }
        }
    };

    return (
        <>
            <Title size="h2" className={styles.title}>
                관리자 페이지(카테고리)
            </Title>
            <TabButton></TabButton>
            <div className={styles.newInputWrap}>
                <Title size="b">카테고리 추가</Title>
                <div className={styles.inputBox}>
                    <NewInput
                        type="text"
                        onChange={(inputValue) => {
                            if (inputValue === null) {
                                setNewCategory(""); // 입력이 null일 경우 빈 문자열로 초기화
                            } else {
                                setNewCategory(inputValue.toString()); // string으로 변환하여 업데이트
                            }
                        }}
                    />
                    <Button onClick={addCategory}>추가</Button>
                </div>
            </div>
            <div className={styles.editedInputWrap}>
                <Title size="b">기존 카테고리</Title>
                {categories.map((category) => (
                    <div key={category._id} className={styles.inputBox}>
                        <EditedInput
                            value={category.categoryName}
                            onChange={(newCategoryName) =>
                                editCategory(category._id, newCategoryName)
                            }
                        ></EditedInput>
                        <div className={styles.buttonWrap}>
                            <Button
                                onClick={() => deleteCategory(category._id)}
                            >
                                삭제
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
