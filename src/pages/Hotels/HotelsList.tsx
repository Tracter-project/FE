import styles from "./HotelsList.module.scss";
import Title from "../../components/Title/Title";
import MainImage from "../../components/MainImage/MainImage";
import DropdownOption from "../../components/DropdownOption/DropdownOption";
import { Link } from "react-router-dom";

interface MainImageItem {
    id: number;
    imageUrl: string;
    title: string;
    popularity: number;
    price: number; // 가격
}

const dummyMainImageList: MainImageItem[] = [
    {
        id: 1,
        imageUrl:
            "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
        title: "서울 호텔",
        price: 200000,
        popularity: 900,
    },
    {
        id: 2,
        imageUrl:
            "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
        title: "제주 호텔",
        price: 200000,
        popularity: 800,
    },
    {
        id: 3,
        imageUrl:
            "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
        title: "부산 호텔",
        price: 200000,
        popularity: 700,
    },
    {
        id: 4,
        imageUrl:
            "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
        title: "강원 호텔",
        price: 200000,
        popularity: 600,
    },
    {
        id: 5,
        imageUrl:
            "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
        title: "서울 호텔",
        price: 200000,
        popularity: 900,
    },
    {
        id: 6,
        imageUrl:
            "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
        title: "제주 호텔",
        price: 200000,
        popularity: 800,
    },
    {
        id: 7,
        imageUrl:
            "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
        title: "부산 호텔",
        price: 200000,
        popularity: 700,
    },
    {
        id: 8,
        imageUrl:
            "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
        title: "강원 호텔",
        price: 200000,
        popularity: 600,
    },
];

export default function HotelsList() {
    return (
        <>
            <Title size="h2" className={styles.title}>
                카테고리 (숙소리스트)
            </Title>
            <div className={styles.hotelsTitle}>
                <Title size="h2">호캉스</Title>
                <DropdownOption title="전체">
                    <div className={styles.dropdownContent}>
                        <Link to="/">서울</Link>
                        <Link to="/">강원</Link>
                        <Link to="/">전라</Link>
                        <Link to="/">경상</Link>
                        <Link to="/">제주</Link>
                    </div>
                </DropdownOption>
            </div>
            <MainImage MainImageList={dummyMainImageList} />
        </>
    );
}
