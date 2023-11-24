import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from './../Layout/Main';
import SignIn from "../Pages/SignIn/SignIn";
import SignupEmployee from "../Pages/SignUP/SignupEmployee";
import SignupAdmin from "../Pages/SignUP/SignupAdmin";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from './PrivateRoute';
import ErrorPage from "../Share/ErrorPage/ErrorPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: 'login',
          element: <SignIn></SignIn>
        },
        {
          path: 'signup-employee',
          element: <SignupEmployee></SignupEmployee>
        },
        {
          path: 'signup-admin',
          element: <SignupAdmin></SignupAdmin>
        },
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // normal user routes
        {
          path: '/dashboard',
          element: <Home></Home>
      }, 

      ]
    }
  ]);