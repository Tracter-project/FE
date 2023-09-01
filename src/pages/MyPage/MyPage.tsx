import { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import BorderButton from "../../components/Button/BorderButton";
import styles from "./MyPage.module.scss";
import MypageButton from "../../components/Button/MypageButton";
import { useCookies } from "react-cookie";
import axiosRequest from "../../api";

interface IResponse {
  status: number;
  data: IUser;
}

interface IUser {
  email: string;
  nickname: string;
}

export default function MyPage() {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  //   const [newPassword, setNewPassword] = useState<string>("");

  //로그인 된 정보 불러옴
  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const response = await axiosRequest.requestAxios<IResponse>(
          "post",
          "/users/mypage",
          { token: token }
        );

        if (response.data) {
          setNickname(response.data.nickname);
          setEmail(response.data.email);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInformation();
  }, []);

  //닉네임 중복 검사
  const checkNickname = async (): Promise<void> => {
    try {
      const response = await axiosRequest.requestAxios<IResponse>(
        "get",
        `/users/validator/${nickname}`
      );

      if (response.status === 200) {
        alert("사용 가능한 닉네임입니다.");
      } else {
        alert("이미 사용 중인 닉네임입니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //닉네임, 패스워드 변경
  const handleUpdate = async (): Promise<void> => {
    try {
      const response = await axiosRequest.requestAxios<IResponse>(
        "patch",
        "/users",
        { nickname: nickname }
      );

      if (response.status === 200) {
        alert("정보가 성공적으로 변경되었습니다.");
      } else {
        alert("정보 변경에 실패했습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //회원 탈퇴
  const handleDelete = async (): Promise<void> => {
    if (window.confirm("정말 탈퇴 하시겠습니까?")) {
      try {
        const response = await axiosRequest.requestAxios<IResponse>(
          "delete",
          "/users",
          { token: token }
        );

        if (response.status === 200) {
          alert("회원 탈퇴가 완료되었습니다.");
        } else {
          alert("회원 탈퇴에 실패하였습니다.");
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
        <Input
          icon={<MdEmail />}
          text={"기존이메일"}
          value={email}
          onChange={() => {}}
        />
        <div className={styles.name}>
          <Input
            icon={<BiSolidUser />}
            text={"기존닉네임"}
            value={nickname}
            onChange={() => {}}
          />
          <BorderButton onClick={checkNickname}>중복 확인</BorderButton>
        </div>
        <Input
          icon={<AiFillLock />}
          text={"새 비밀번호"}
          className={styles.passwordinput}
          value={""}
          onChange={() => {}}
        />
        <Input
          icon={<AiFillLock />}
          text={"새 비밀번호 확인"}
          className={styles.passwordinput}
          value={""}
          onChange={() => {}}
        />
        <div className={styles.mypageButton}>
          <MypageButton onClick={handleUpdate}>정보 변경</MypageButton>
          <MypageButton onClick={handleDelete}>회원 탈퇴</MypageButton>
        </div>
      </div>
      <Title size="h2">좋아요</Title>
            {/* <div className={styles.myPageList}>
                <MyPagePlaces myList={dummyMyPageList}></MyPagePlaces>
            </div> */}
    </section>
  );
}
