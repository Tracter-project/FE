import { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import BorderButton from "../../components/Button/BorderButton";
import MyPagePlaces from "../../components/MyPagePlaces/MyPagePlaces";
import styles from "./MyPage.module.scss";

//마이페이지숙소리스트 타입
interface MyItem {
    id: number;
    imageUrl: string;
    title: string;
}
//마이페이지숙소 더미
const dummyMyPageList: MyItem[] = [
    {
        id: 1,
        imageUrl:
            "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
        title: "서울 호캉스",
    },
    {
        id: 2,
        imageUrl:
            "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
        title: "제주도 여행",
    },
    {
        id: 3,
        imageUrl:
            "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
        title: "제주도 여행",
    },
    {
        id: 4,
        imageUrl:
            "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
        title: "제주도 여행",
    },
];

// interface UserInformation {
//     email: string;
//     nickname: string;
//     likedPlaces: number[];
//     role: string;
// }

// interface Place {
//     _id: number;
//     placeName: string;
//     price: number;
// }

export default function MyPage() {
    // const [userInformation, setUserInformation] = useState<UserInformation | null>(null);
    //   const [likedPlaces, setLikedPlaces] = useState<Place[]>([]);

    //   useEffect(() => {
    //     fetchUserInformation();
    //     fetchLikedPlaces();
    // }, []);

    // const fetchUserInformation = async () => {
    //     try {
    //         const response = await axiosRequest.requestAxios("get", "/users");
    //         setUserInformation(response.userInformation);
    //     } catch (error) {
    //         console.error("회원 정보 조회 실패:", error);
    //     }
    // };

    // const fetchLikedPlaces = async () => {
    //     try {
    //         const response = await axiosRequest.requestAxios(
    //             "get",
    //             "/places/all"
    //         );
    //         const likedPlacesData = response.totalPlace.filter((place) =>
    //             userInformation?.likedPlaces.includes(place._id)
    //         );
    //         setLikedPlaces(likedPlacesData);
    //     } catch (error) {
    //         console.error("좋아요한 숙소 조회 실패:", error);
    //     }
    // };

    return (
        <section className={styles.mypage}>
            <Title size="h2">마이페이지</Title>
            <div className={styles.myPageWrap}>
                <Input
                    icon={<MdEmail />}
                    text={"기존이메일"}
                    onChange={() => {}}
                />
                <div className={styles.name}>
                    <Input
                        icon={<BiSolidUser />}
                        text={"기존닉네임"}
                        onChange={() => {}}
                    />
                    <BorderButton>중복 확인</BorderButton>
                </div>
                <Input
                    icon={<AiFillLock />}
                    text={"기존비밀번호"}
                    className={styles.passwordinput}
                    onChange={() => {}}
                />
                <Input
                    icon={<AiFillLock />}
                    text={"기존비밀번호 확인"}
                    className={styles.passwordinput}
                    onChange={() => {}}
                />
            </div>
            <Title size="h2">좋아요</Title>
            <div className={styles.myPageList}>
                <MyPagePlaces myList={dummyMyPageList}></MyPagePlaces>
            </div>
        </section>
    );
}
