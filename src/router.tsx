import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import DefaultLayout from "./components/layout/DefaultLayout";
import GuestLayout from "./components/layout/GuestLayout";
import MemberEnrollment from "./pages/MemberEnrollment";
import MemberList from "./pages/MemberList";
import MemberDetail from "./pages/MemberDetail";



// Create the router with the defined routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children:[
      {
        path: '/',
        element: <Navigate to="/home" />      
      },
      {
        path: '/home',
        element: <Home username={"tony"} />
      },
      {
        path: '/member_list',
        element: <MemberList />
      },
      {
        path: '/member_list',
        element: <MemberDetail />
      },
      {
        path: '/member_enrollment',
        element: <MemberEnrollment />
      },
      {
        path: '/detail',
        element: <Detail />
      },
    ]
  },
  
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/login" />      
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
  
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;

