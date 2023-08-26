import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import '../src/assets/styles/global.scss';
import NotFound from './pages/test/NotFound.tsx';
import Home from './pages/Home/Home.tsx';
import Login from './pages/Login/Login.tsx';
import Register from './pages/Register/Register.tsx';
import Admin from './pages/Admin/Admin.tsx';
import AdminCategory from './pages/Admin/AdminCategory.tsx';
import CommunityList from './pages/Community/CommunityList.tsx';
import Min from './pages/min.tsx';
import Sol from './pages/sol.tsx';
import Ho from './pages/ho.tsx';
import Seok from './pages/seok.tsx';
import CommunityAddPost from './pages/Community/CommunityAddPost.tsx';
import MyPage from './pages/MyPage/MyPage.tsx';
import PlaceAddPost from './pages/Community/PlaceAddPost.tsx';
import PostDetails from './pages/Community/PostDetails.tsx';
import HotelsList from './pages/Hotels/HotelsList.tsx';
// import HotelsDetail from './pages/HotelsDetail/HotelsDetail.tsx';
// import HotelsMap from './pages/HotelsMap/HotelsMap.tsx';
import Tbti from './pages/Tbti/Tbti.tsx';
import TbtiResult from './pages/TbtiResult/TbtiResult.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, path: '/', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/admin', element: <Admin /> },
            { path: '/admin/category', element: <AdminCategory /> },
            { path: '/mypage', element: <MyPage /> },
            { path: '/community/list', element: <CommunityList /> },
            { path: '/community/addpost', element: <CommunityAddPost /> },
            { path: '/min', element: <Min /> },
            { path: '/sol', element: <Sol /> },
            { path: '/ho', element: <Ho /> },
            { path: '/seok', element: <Seok /> },
            { path: '/place/addpost/:placeId', element: <PlaceAddPost /> },
            { path: '/community/posts/:postId', element: <PostDetails /> },
            { path: '/hotelsList', element: <HotelsList /> },
            // { path: '/hotelsDetail', element: <HotelsDetail /> },
            // { path: '/hotelsMap', element: <HotelsMap /> },
            { path: '/test', element: <Tbti /> },
            { path: '/test/result/:categoryid', element: <TbtiResult /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
