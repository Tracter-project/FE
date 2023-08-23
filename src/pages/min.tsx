import { useState } from "react";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import MainLargeButton from "../components/Button/MainLargeButton";
import MainButton from "../components/Button/MainButton";
import BorderButton from "../components/Button/BorderButton";
import Input from "../components/Input/Input";
import CheckBox from "../components/CheckBox/CheckBox";
import MainPopularPlaces from "../components/MainPopularPlaces/MainPopularPlaces";
import MainNewPlaces from "../components/MainNewPlaces/MainNewPlaces";
import AdminTable from "../components/AdminTable/AdminTable";
import LocalImg from "../components/LocalImg/LocalImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { MdEmail } from "react-icons/md";
import LoginImg from "../assets/loginImg.png";


//인기숙소리스트 타입
interface PopularItem {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    popularity: number;
}

//신규숙소리스트 타입
interface NewItem {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    date: Date;
}

export default function Min() {
    //checkbox 상태관리
    const [checkBoxChecked, setCheckBoxChecked] = useState(false);
    //adminTable 상태관리
    const [data, setData] = useState([
        {
            id: 1,
            selected: false,
            imageUrl: "URL_1",
            area: "서울",
            category: "호텔",
            name: "숙소 1",
            description: "숙소 설명 1",
            price: 100,
        },
        {
            id: 2,
            selected: false,
            imageUrl: "URL_2",
            area: "제주",
            category: "펜션",
            name: "숙소 2",
            description: "숙소 설명 2",
            price: 150,
        },
    ]);

    // 인기숙소 리스트
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

    //인기숙소 더미
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
    ];

    //신규숙소 더미
    const dummyNewList: NewItem[] = [
        {
            id: 1,
            imageUrl:
                "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
            title: "서울 호캉스",
            description: "호캉스 상세정보",
            date: new Date("2023-08-20T12:30:00"),
        },
        {
            id: 2,
            imageUrl:
                "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
            title: "제주도 여행",
            description: "제주도 여행 상세정보",
            date: new Date("2023-08-19T15:45:00"),
        },
    ];

    // 시간 정렬
    dummyNewList.sort((a, b) => b.date.getTime() - a.date.getTime());

    //adminTable CRUD
    const handleEdit = (id: number) => {
        //수정 로직 구현
        console.log(`Edit clicked for ID ${id}`);
    };
    const handleDelete = (id: number) => {
        // 삭제 로직 구현
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
    };

    const handleAdd = () => {
        // 추가 로직 구현
        const newId = data.length + 1;
        const newEntry = {
            id: newId,
            selected: false,
            imageUrl: "URL_new",
            area: "새로운 지역",
            category: "새로운 카테고리",
            name: "새로운 숙소",
            description: "새로운 설명",
            price: 200,
        };

        setData([...data, newEntry]);
    };

    return (
        <>
            <Title size="h1">
                <FontAwesomeIcon icon={faPen} />
                hello
            </Title>
            <Button onClick={() => {}}>가입하기</Button>
            <MainLargeButton>테스트 하러가기</MainLargeButton>
            <MainButton>바로가기</MainButton>
            <BorderButton>메일 발송</BorderButton>
            <Input icon={<MdEmail />} text={"이메일"} />
            <CheckBox
                checked={checkBoxChecked}
                onChange={() => setCheckBoxChecked(!checkBoxChecked)}
            ></CheckBox>
            <MainPopularPlaces popularList={dummyPopularList} />
            <MainNewPlaces newList={dummyNewList} />
            
            <AdminTable
                data={data}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onAdd={handleAdd}
                setData={setData}
            ></AdminTable>
            <LocalImg
                src={LoginImg}
                alt="로그인 이미지"
                className="imgStyle"
            ></LocalImg>
        </>
    );
}
