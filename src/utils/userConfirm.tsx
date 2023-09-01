import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axiosRequest from "../api";

interface Response {
  data: Data;
}

interface Data {
  user: User;
}

interface User {
  nickname: string;
}

// 토큰 디코딩이 안돼서 급한대로 닉네임으로 했어요 ㅜㅜ
export default function UserConfirm(): string {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const [loginUser, setLoginUser] = useState<string>("");

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const response = await axiosRequest.requestAxios<Response>(
          "post",
          "/users/mypage",
          { token: token }
        );

        if (response.data) {
          setLoginUser(response.data.user.nickname);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInformation();
  }, []);

  return loginUser;
}
