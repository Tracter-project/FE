import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "../src/assets/styles/global.scss";
import NotFound from "./pages/test/NotFound.tsx";
import Home from "./pages/Home/Home.tsx";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import Admin from "./pages/Admin/Admin.tsx";
import AdminCategory from "./pages/Admin/AdminCategory.tsx";
import CommunityList from "./pages/Community/CommunityList.tsx";
import Min from "./pages/min.tsx";
import Sol from "./pages/sol.tsx";
import Ho from "./pages/ho.tsx";
import Seok from "./pages/seok.tsx";
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
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/admin", element: <Admin /> },
      { path: "/admin/category", element: <AdminCategory /> },
      { path: "/mypage", element: <MyPage /> },
      { path: "/community/list", element: <CommunityList /> },
      { path: "/community/addpost", element: <CommunityAddPost /> },
      { path: "/min", element: <Min /> },
      { path: "/sol", element: <Sol /> },
      { path: "/ho", element: <Ho /> },
      { path: "/seok", element: <Seok /> },
      { path: "/place/addpost/:placeId", element: <PlaceAddPost /> },
      { path: "/community/posts/:postId", element: <PostDetails /> },
      { path: "/category", element: <Category /> },
      { path: "/place", element: <Place /> },
      { path: "/placeMap", element: <PlaceMap /> },
      { path: "/test", element: <Tbti /> },
      { path: "/testresult", element: <TbtiResult /> },
      { path: "/search/result", element: <SearchResult /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
