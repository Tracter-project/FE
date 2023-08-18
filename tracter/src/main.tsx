import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from './pages/test/NotFound.tsx';
import Home from './pages/test/Home/Home.tsx';
import Login from './pages/test/Login/Login.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<NotFound/>,
    children:[
      {index: true, path: "/", element: <Home/>},
      {path:"/login", element: <Login/>}
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
