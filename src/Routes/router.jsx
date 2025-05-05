import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layouts/AuthLayout";


const router = createBrowserRouter([
  {
    path:'/',
    Component: HomeLayout,
    children: [
      { 
        index: true, 
        Component: Home 
      },
      { 
        path:"/category/:id", 
        Component: CategoryNews,
        hydrateFallbackElement: <span className="loading loading-dots loading-xl"></span>,
        loader: ()=> fetch("/news.json"),
      }
    ]
  },
  {
    path:'/auth',
    Component:AuthLayout,
    children:[
      {
        path:"login",
        Component: Login
      },
      {
        path:"register",
        Component: Register
      }
    ]
  },
  {
    path:'/news',
    element: <h2>News</h2>
  },
  {
    path:'/*',
    element: <h2>ERROR 404</h2>
  },
])

export default router;