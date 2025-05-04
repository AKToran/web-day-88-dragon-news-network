import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";


const router = createBrowserRouter([
  {
    path:'/',
    Component: HomeLayout
  },
  {
    path:'/auth',
    element: <h2>Auth</h2>
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