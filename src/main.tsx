import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import '../src/assets/styles/global.scss';
import NotFound from './pages/test/NotFound.tsx';
import Home from './pages/Home/Home.tsx';
import Login from './pages/Login/Login.tsx';
import Min from './pages/min.tsx'
import Sol from './pages/sol.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<NotFound/>,
    children:[
      {index: true, path: "/", element: <Home/>},
      {path:"/login", element: <Login/>},
      {path:"/min", element: <Min/>},
      {path:"/sol", element: <Sol/>}
    ],
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  )
root.render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
