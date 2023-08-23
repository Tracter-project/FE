import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import BorderButton from "../../components/Button/BorderButton";
import { MdEmail } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import styles from "./MyPage.module.scss";
import MyPagePlaces from "../../components/MyPagePlaces/MyPagePlaces";

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

export default function MyPage() {
    return (
        <section className={styles.mypage}>
            <Title size="h2">마이페이지</Title>
            <div className={styles.myPageWrap}>
                <Input icon={<MdEmail />} text={"기존이메일"} />
                <div className={styles.name}>
                    <Input icon={<BiSolidUser />} text={"기존닉네임"} />
                    <BorderButton>중복 확인</BorderButton>
                </div>
                <Input
                    icon={<AiFillLock />}
                    text={"기존비밀번호"}
                    className={styles.passwordinput}
                />
                <Input
                    icon={<AiFillLock />}
                    text={"기존비밀번호 확인"}
                    className={styles.passwordinput}
                />
            </div>
            <Title size="h2">좋아요</Title>
            <div className={styles.myPageList}>
                <MyPagePlaces myList={dummyMyPageList}></MyPagePlaces>
            </div>
        </section>
    );
}
