import Root from "@/layout/Root"
import { createBrowserRouter } from "react-router-dom"
import Profile from '@/page/profile'
import Login from "@/components/General/Login"
const router = createBrowserRouter([{
    path: '/',
    element: < Root />,
    children: [
      {
        index: true,
        element: < Login />
      },
        {
          path:'/profile',
          element: <Profile />     
        }
    ]
}])
export default router