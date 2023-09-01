import React from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import App from "./App.tsx";
import "../src/assets/styles/global.scss";
import NotFound from "./pages/test/NotFound.tsx";
import Home from "./pages/Home/Home.tsx";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import Admin from "./pages/Admin/Admin.tsx";
import AdminCategory from "./pages/Admin/AdminCategory.tsx";
import CommunityList from "./pages/Community/CommunityList.tsx";
import CommunityAddPost from "./pages/Community/CommunityAddPost.tsx";
import MyPage from "./pages/MyPage/MyPage.tsx";
import PlaceAddPost from "./pages/Community/PlaceAddPost.tsx";
import PostDetails from "./pages/Community/PostDetails.tsx";
import Category from "./pages/Category/Category.tsx";
import Place from "./pages/Place/Place.tsx";
import PlaceMap from "./pages/PlaceMap/PlaceMap.tsx";
import Tbti from "./pages/Tbti/Tbti.tsx";
import TbtiResult from "./pages/TbtiResult/TbtiResult.tsx";
import SearchResult from "./pages/SearchResult/SearchResult.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, path: "/", element: <Home /> },
            // 토큰이 있을 경우 로그인 페이지 접근 막기
            { path: "/login", element: <LoginWithTokenControl /> },
            { path: "/register", element: <Register /> },
            { path: "/admin", element: <Admin /> },
            { path: "/admin/category", element: <AdminCategory /> },
            // 토큰이 있을 경우 마이페이지 접근 막기
            { path: "/mypage", element: <MyPageWithTokenControl /> },
            { path: "/community/list", element: <CommunityList /> },
            { path: "/community/addpost", element: <CommunityAddPost /> },
            { path: "/place/addpost/:placeId", element: <PlaceAddPost /> },
            { path: "/community/posts/:postId", element: <PostDetails /> },
            { path: "/category/:categoryId", element: <Category /> },
            { path: "/place/:placeId", element: <Place /> },
            { path: "/placeMap", element: <PlaceMap /> },
            { path: "/test", element: <Tbti /> },
            { path: "/testresult", element: <TbtiResult /> },
            { path: "/search/result", element: <SearchResult /> },
        ],
    },
]);

// eslint-disable-next-line react-refresh/only-export-components
function LoginWithTokenControl() {
    const [cookies] = useCookies(["token"]);

    return cookies.token ? <Navigate to="/" /> : <Login />;
}

// eslint-disable-next-line react-refresh/only-export-components
function MyPageWithTokenControl() {
    const [cookies] = useCookies(["token"]);

    return cookies.token ? <MyPage /> : <Navigate to="/login" />;
}
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <CookiesProvider>
            <RouterProvider router={router} />
        </CookiesProvider>
    </React.StrictMode>
);
