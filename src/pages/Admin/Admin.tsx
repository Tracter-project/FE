import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
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
    placeName: string;
    price: number | null;
    description: string;
    category: string;
    region: string;
    bannerImage: string;
    mainImage: string;
    detailImage: string;
    bookingURL: string;
    placeLikeCount: number | null;
}
// interface PlaceResponse {
//     status: number;
//     message: string;
//     places: Place[];
// }
export default function Admin() {
    const [data, setData] = useState<Place[]>([]);

    // 전체 숙소 데이터 조회하는 API 호출
    const fetchPlaces = async () => {
        try {
            const placesResponse: AxiosResponse =
                await axiosRequest.requestAxios("get", "/places/all");
            setData(placesResponse.data);
        } catch (error) {
            alert("숙소 조회에 실패하였습니다.");
        }
    };
    useEffect(() => {
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
