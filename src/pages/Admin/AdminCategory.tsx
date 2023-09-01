import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axiosRequest from "../../api";
import { AxiosResponse } from "axios";
import Title from "../../components/Title/Title";
import NewInput from "../../components/NewInput/NewInput";
import EditedInput from "../../components/EditedInput/EditedInput";
import Button from "../../components/Button/Button";
import TabButton from "../../components/TabButton/TabButton";
import styles from "./Admin.module.scss";

interface Category {
    id: number;
    categoryName: string;
}
// interface CategoryResponse {
//     status: number;
//     message: string;
//     data: Category[];
// }

export default function AdminCategory() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [newCategory, setNewCategory] = useState("");
    const [cookies] = useCookies(["token"]);
    const token = cookies.token;

    //카테고리 조회
    const fetchCategories = async () => {
        try {
            const categoryResponse: AxiosResponse =
                await axiosRequest.requestAxios("get", "/categories");
            setCategories(categoryResponse.data);
        } catch (error) {
            alert("카테고리 조회에 실패하였습니다.");
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    //카테고리 수정
    const editCategory = async (
        categoryId: number,
        newCategoryName: string
    ) => {
        try {
            const categoryToUpdate = categories.find(
                (categories) => categories.id === categoryId
            );
            if (!categoryToUpdate) {
                alert("수정할 카테고리를 찾을 수 없습니다.");
                return;
            }
            await axiosRequest.requestAxios("patch", `/admin/categories`, {
                id: categoryToUpdate.id,
                updateCategoryName: newCategoryName,
                token: token,
            });

            fetchCategories();
        } catch (error) {
            alert("수정을 실패하였습니다.");
        }
    };

    const deleteCategory = async (categoryId: number) => {
        const categoryToUpdate = categories.find(
            (categories) => categories.id === categoryId
        );
        if (!categoryToUpdate) {
            alert("수정할 카테고리를 찾을 수 없습니다.");
            return;
        }
        try {
            await axiosRequest.requestAxios("delete", `/admin/categories`, {
                id: categoryToUpdate.id,
                token: token,
            });
            alert("수정이 삭제되었습니다.");
            fetchCategories();
        } catch (error) {
            alert("카테고리 삭제에 실패하였습니다.");
        }
    };

    const addCategory = async () => {
        if (newCategory) {
            try {
                const categoryResponse: AxiosResponse =
                    await axiosRequest.requestAxios(
                        "post",
                        "/admin/categories",
                        {
                            categoryName: newCategory,
                            token: token,
                        }
                    );
                setNewCategory("");
                fetchCategories();
                alert("카테고리가 추가되었습니다.");
            } catch (error) {
                alert("카테고리 추가에 실패하였습니다.");
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
                {categories.length > 0 &&
                    categories.map((category) => {
                        return (
                            <div key={category.id} className={styles.inputBox}>
                                <EditedInput
                                    value={category.categoryName}
                                    onChange={(newCategoryName) =>
                                        editCategory(
                                            category.id,
                                            newCategoryName
                                        )
                                    }
                                ></EditedInput>
                                <div className={styles.buttonWrap}>
                                    <Button
                                        onClick={() =>
                                            deleteCategory(category.id)
                                        }
                                    >
                                        삭제
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
}
