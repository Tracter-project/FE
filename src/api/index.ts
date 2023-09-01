import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const allowMethod: string[] = ["get", "post", "put", "patch", "delete"];

// axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.baseURL = "http://kdt-sw-5-2-team02.elicecoding.com/api";
// axios.defaults.baseURL =
//   process.env.REACT_APP_API_URL ?? "http://localhost:3000";
// const API_END_POINT: string =
//   process.env.REACT_APP_API_END_POINT ?? "http://localhost:5173";

// 정의된 함수 시그니처에 맞게 인터페이스 생성
interface AxiosRequest {
    requestAxios: <T>(method: string, url: string, data?: object) => Promise<T>;
}

const axiosRequest: AxiosRequest = {
    /**
     * @param method 어떤 형식의 method를 보내는지 설정 (get, post, put, patch, delete)
     * @param url 호출 url 작성 (현재는 http://localhost:3001/api/v1/~~~ 식으로 적어주어야 함. 추후 api endpoint 통합 예정) path param은 url에 같이 정의해준다.
     * @param data request body에 해당하는 사항. post, put 시 추가/수정할 객체를 지정해주면 된다.
     */
    requestAxios: async <T>(method: string, url: string, data = {}) => {
        // 이상한 method 넣으면 실행 못하게 미리 에러 처리 한다.
        if (!allowMethod.includes(method.toLowerCase()))
            throw new Error("허용되지 않은 호출 method입니다.");
        try {
            const response = await axios({
                method,
                url: `${axios.defaults.baseURL}${url}`,
                data,
            });
            return response as T;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
};

export default axiosRequest;
