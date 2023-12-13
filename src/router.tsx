import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import DefaultLayout from "./components/layout/DefaultLayout";
import GuestLayout from "./components/layout/GuestLayout";
import MemberEnrollment from "./pages/MemberEnrolment";
import TestDynamicForm from "./components/memberenrolment/forms/TestDynamicForm";



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
        path: '/test_dynamic',
        element: <TestDynamicForm />
      },
      {
        path: '/member_enrolment',
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

