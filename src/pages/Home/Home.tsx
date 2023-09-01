import { useNavigate } from "react-router-dom";

import MainNewPlaces from "../../components/MainNewPlaces/MainNewPlaces";
import MainPopularPlaces from "../../components/MainPopularPlaces/MainPopularPlaces";
import styles from "./Home.module.scss";
import Title from "../../components/Title/Title";
import MainButton from "../../components/Button/MainButton";
import MainLargeButton from "../../components/Button/MainLargeButton";
import TestlinkButton from "../../components/Button/TestlinkButton";

export default function Home() {
    // const dummyPopularList1: PopularItem[] = [
    //   {
    //     id: 1,
    //     imageUrl:
    //       "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
    //     title: "서울 호캉스",
    //     description: "호캉스 상세정보",
    //     popularity: 5,
    //   },
    // ];
    // const dummyPopularList2: PopularItem[] = [
    //   {
    //     id: 2,
    //     imageUrl:
    //       "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
    //     title: "호캉스",
    //     description: "제주도 여행 상세정보",
    //     popularity: 8,
    //   },
    // ];

    // const dummyNewList1: NewItem[] = [
    //   {
    //     id: 1,
    //     imageUrl: "./src/assets/newlist1.png",
    //     title: "호캉스",
    //     description: "가평에 있는 호캉스에 관한 정보 입니다.",
    //     date: new Date("2023-08-20T12:30:00"),
    //   },
    // ];
    // const dummyNewList2: NewItem[] = [
    //   {
    //     id: 2,
    //     imageUrl: "./src/assets/newlist2.png",
    //     title: "글램핑",
    //     description: "강원도에 있는 글램핑에 관한 정보 입니다.",
    //     date: new Date("2023-08-19T15:45:00"),
    //   },
    // ];
    // const dummyNewList3: NewItem[] = [
    //   {
    //     id: 3,
    //     imageUrl: "./src/assets/newlist3.png",
    //     title: "풀빌라",
    //     description: "제주도에 있는 풀빌라에 관한 정보 입니다.",
    //     date: new Date("2023-08-19T15:45:00"),
    //   },
    // ];

    const navigate = useNavigate() as (to: string) => void;

    return (
        <section>
            <div className={styles.firstSecend}>
                <div className={styles.first}>
                    <div className={styles.firstSecText}>
                        <Title size="h1"> Hotel</Title>
                        <p className={styles.TextP}>
                            인근 골프장, 식료품점/편의점, 테라스 등을 오라카이
                            송도파크 호텔에서 이용해 보세요. 휴식 및 재충전을
                            위해 사우나에서 시간을 보내보세요. 시설 내 커피숍인
                            illy CAFFE에서 브런치, 가벼운 식사도 즐기실 수
                            있습니다. 모든 고객은 객실 내 무료 WiFi,
                            커피숍/카페, 드라이클리닝/세탁 서비스 등을 이용하실
                            수 있습니다.
                        </p>
                        <MainButton onClick={() => navigate("/category/1")}>
                            호텔 바로가기
                        </MainButton>
                    </div>
                    <div className={styles.firstSecPic}>
                        <img
                            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Main Picture"
                        ></img>
                    </div>
                </div>
            </div>

            <div className={styles.fourth}>
                <div className={styles.travelPic}>
                    <div className={styles.content}>
                        <Title size="h3">여행 테스트</Title>
                        <Title size="p">
                            당신의 여행 성향을 파악하여 추천 해드립니다.
                            <br /> 호캉스, 글램핑, 풀빌라, 캠핑, 카라반에 관한
                            정보를 제공 해드립니다.
                        </Title>
                        <div className={styles.LargeButton}>
                            <TestlinkButton onClick={() => navigate("/test")}>
                                테스트 하러가기
                            </TestlinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
