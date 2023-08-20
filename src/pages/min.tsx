import { useState } from "react";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import MainLargeButton from "../components/Button/MainLargeButton";
import MainButton from "../components/Button/MainButton";
import BorderButton from "../components/Button/BorderButton";
import Input from "../components/Input/Input";
import CheckBox from "../components/CheckBox/CheckBox";
import MainPopularPlaces from "../components/MainPopularPlaces/MainPopularPlaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { MdEmail } from "react-icons/md";

//인기숙소리스트 타입
interface PopularItem {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    popularity: number;
}

export default function Min() {
    //checkbox 상태관리
    const [checkBoxChecked, setCheckBoxChecked] = useState(false);

    //인기숙소 리스트
    // const [popularList setPopularList] = useState<PopularItem[]/>([])

    // useEffect(()=> {
    //   //DB에서 데이터를 불러오는 코드
    //   //불러온 데이터를 setPopularList로 설정

    //   //예시로 임시 데이터를 사용한 예시
    //   const fetchedPopularList: PopularItem[] = [

    //     {
    //       id: 1,
    //       imageUrl: 'https://yaimg.yanolja.com/v5/2022/10/31/12/640/635fc0f6abccc1.66460254.jpg',
    //       title: '서울 호캉스',
    //       description: '호캉스 상세정보',
    //       popularity: 5,
    //     },
    //     {
    //       id: 2,
    //       imageUrl: 'URL_2',
    //       title: '제주도 여행',
    //       description: '제주도 여행 상세정보',
    //       popularity: 8,
    //     },

    //   ];

    //   setPopularList(fetchedPopularList)
    // },[])

    const dummyPopularList: PopularItem[] = [
        {
            id: 1,
            imageUrl:
                "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
            title: "서울 호캉스",
            description: "호캉스 상세정보",
            popularity: 5,
        },
        {
            id: 2,
            imageUrl:
                "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
            title: "제주도 여행",
            description: "제주도 여행 상세정보",
            popularity: 8,
        },
        // 추가적인 인기순위 항목들
    ];

    return (
        <>
            <Title size="h1">
                <FontAwesomeIcon icon={faPen} />
                hello
            </Title>
            <Button>가입하기</Button>
            <MainLargeButton>테스트 하러가기</MainLargeButton>
            <MainButton>바로가기</MainButton>
            <BorderButton>메일 발송</BorderButton>
            <Input icon={<MdEmail />} text={"이메일"} />
            <CheckBox
                checked={checkBoxChecked}
                onChange={() => setCheckBoxChecked(!checkBoxChecked)}
            ></CheckBox>
            <div>
                <MainPopularPlaces popularList={dummyPopularList} />
            </div>
        </>
    );
}
