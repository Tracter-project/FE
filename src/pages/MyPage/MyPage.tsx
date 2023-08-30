import { useState, useEffect } from 'react';
import axios from 'axios';
import { MdEmail } from 'react-icons/md';
import { BiSolidUser } from 'react-icons/bi';
import { AiFillLock } from 'react-icons/ai';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import BorderButton from '../../components/Button/BorderButton';
import MyPagePlaces from '../../components/MyPagePlaces/MyPagePlaces';
import styles from './MyPage.module.scss';
import MypageButton from '../../components/Button/MypageButton';

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
        imageUrl: 'https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg',
        title: '서울 호캉스',
    },
    {
        id: 2,
        imageUrl: 'https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png',
        title: '제주도 여행',
    },
    {
        id: 3,
        imageUrl: 'https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png',
        title: '제주도 여행',
    },
    {
        id: 4,
        imageUrl: 'https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png',
        title: '제주도 여행',
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
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    //로그인 된 정보 불러옴
    useEffect(() => {
        const fetchUserInformation = async () => {
            try {
                const response = await axios.get('/users');
                setNickname(response.data.nickname);
                setPassword(response.data.password);
            } catch (error) {
                console.error('회원 정보 조회 실패:', error);
            }
        };

        fetchUserInformation();
    }, []);

    //닉네임 중복 검사
    const checkNickname = async () => {
        try {
            const response = await axios.get('/users/validator/nickname', { params: { nickname } });

            if (response.data.isAvailable) {
                alert('사용 가능한 닉네임입니다.');
            } else {
                alert('이미 사용 중인 닉네임입니다.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    //닉네임, 패스워드 변경
    const handleUpdate = async () => {
        try {
            const response = await axios.patch('/users', { nickname, password });

            if (response.status === 200) {
                alert('정보가 성공적으로 변경되었습니다.');
            } else {
                alert('정보 변경에 실패했습니다.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    //회원 탈퇴
    const handleDelete = async () => {
        if (window.confirm('정말 탈퇴 하시겠습니까?')) {
            try {
                const response = await axios.delete('/users');

                if (response.status === 200) {
                    alert('회원 탈퇴가 완료되었습니다.');
                    // 여기서 로그아웃 처리나 페이지 이동 등의 로직이 필요할 수 있습니다.
                } else {
                    alert('회원 탈퇴에 실패하였습니다.');
                }
            } catch (error) {
                console.error(error);
            }
        }
    };
    return (
        <section className={styles.mypage}>
            <Title size="h2">마이페이지</Title>
            <div className={styles.myPageWrap}>
                <Input icon={<MdEmail />} text={'기존이메일'} onChange={() => {}} />
                <div className={styles.name}>
                    <Input icon={<BiSolidUser />} text={'기존닉네임'} onChange={(e) => setNickname(e.target.value)} />
                    <BorderButton onClick={checkNickname}>중복 확인</BorderButton>
                </div>
                <Input
                    icon={<AiFillLock />}
                    text={'기존비밀번호'}
                    type="password"
                    className={styles.passwordinput}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    icon={<AiFillLock />}
                    text={'기존비밀번호 확인'}
                    className={styles.passwordinput}
                    onChange={() => {}}
                />
                <div className={styles.mypageButton}>
                    <MypageButton onClick={handleUpdate}>정보 변경</MypageButton>
                    <MypageButton onClick={handleDelete}>회원 탈퇴</MypageButton>
                </div>
            </div>
            <Title size="h2">좋아요</Title>
            <div className={styles.myPageList}>
                <MyPagePlaces myList={dummyMyPageList}></MyPagePlaces>
            </div>
        </section>
    );
}
