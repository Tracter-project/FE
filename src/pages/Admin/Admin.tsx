import { useState, useEffect } from "react";
import axiosRequest from "../../api";
import styles from "./Admin.module.scss";
import Title from "../../components/Title/Title";
import AdminTable from "../../components/AdminTable/AdminTable";
// import DeleteModal from "../../components/DeleteModal/DeleteModal";
// import Button from "../../components/Button/Button";
import TabButton from "../../components/TabButton/TabButton";
import EditModal from "../../components/EditModal/EditModal";

interface Place {
    id: number;
    selected: boolean;
    imageUrl: string;
    area: string;
    category: string;
    name: string;
    description: string;
    price: number;
}
interface PlaceResponse {
    status: number;
    message: string;
    totalPlace: Place[]; // Place 타입의 배열을 예상
    // 다른 필드들도 정의해야 함
}
export default function Admin() {
    // const [data, setData] = useState([
    //     {
    //         id: 1,
    //         selected: false,
    //         imageUrl: "URL_1",
    //         area: "서울",
    //         category: "호텔",
    //         name: "숙소 1",
    //         description: "숙소 설명 1",
    //         price: 100,
    //     },
    //     {
    //         id: 2,
    //         selected: false,
    //         imageUrl: "URL_2",
    //         area: "제주",
    //         category: "펜션",
    //         name: "숙소 2",
    //         description: "숙소 설명 2",
    //         price: 150,
    //     },
    // ]);
    const [data, setData] = useState<Place[]>([]);

    useEffect(() => {
        // 전체 숙소 데이터 조회하는 API 호출
        async function fetchPlaces() {
            try {
                const placesResponse: PlaceResponse =
                    await axiosRequest.requestAxios("get", "/places/all");
                setData(placesResponse.totalPlace); // 서버 응답에서 실제 숙소 데이터를 추출하여 설정
            } catch (error) {
                console.error(error);
            }
        }

        fetchPlaces();
    }, []);

    return (
        <>
            <Title size="h2" className={styles.title}>
                관리자 페이지(숙소리스트)
            </Title>
            <TabButton></TabButton>
            <AdminTable data={data} setData={setData}></AdminTable>
            {/* <DeleteModal className={styles.content}>
                <Title size="h2">숙소리스트 삭제</Title>
                <Title size="b">숙소리스트를 삭제하시겠습니까?</Title>
                <Button onClick={() => {}}>확인</Button>
            </DeleteModal> */}
            <EditModal className={styles.editModal}>{}</EditModal>
        </>
    );
}
