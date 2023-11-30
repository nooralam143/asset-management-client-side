import {
  createBrowserRouter,
} from "react-router-dom";
import Main from './../Layout/Main';
import SignIn from "../Pages/SignIn/SignIn";
import SignupEmployee from "../Pages/SignUP/SignupEmployee";
import SignupAdmin from "../Pages/SignUP/SignupAdmin";
import Home from "../Pages/Home/Home";
import PrivateRoute from './PrivateRoute';
import ErrorPage from "../Share/ErrorPage/ErrorPage";
import MyTeem from "../Pages/Employee/MyTeem/MyTeem";
import MyAssets from './../Pages/Employee/MyAssets';
import RequestAsset from './../Pages/Employee/RequestAsset';
import CustomeRequest from './../Pages/Employee/CustomeRequest';
import EmployeeHome from "../Pages/Employee/EmployeeHome";
import UserProfile from './../Pages/Employee/UserProfile';
import MyEmployeeList from "../Pages/Admin/MyEmployeeList";
import AddEmployee from "../Pages/Admin/AddEmployee";
import AssetList from "../Pages/Admin/AssetList";
import AllRequest from "../Pages/Admin/AllRequest";
import AddAsset from "../Pages/Admin/AddAsset";
import CustomeRequestList from "../Pages/Admin/CustomeRequestList";

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
      {
        path: 'my-teem',
        element: <PrivateRoute><MyTeem></MyTeem></PrivateRoute>
      },
      {
        path: 'my-assets',
        element: <PrivateRoute><MyAssets></MyAssets></PrivateRoute>
      },
      {
        path: 'request-asset',
        element: <PrivateRoute><RequestAsset></RequestAsset></PrivateRoute>
      },
      {
        path: 'custome-request-assets',
        element: <PrivateRoute><CustomeRequest></CustomeRequest></PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path: 'employee-list',
        element: <PrivateRoute><MyEmployeeList></MyEmployeeList></PrivateRoute>
      },
      {
        path: 'add-employee',
        element: <PrivateRoute><AddEmployee></AddEmployee></PrivateRoute>
      },
      {
        path: 'asset-list',
        element: <PrivateRoute><AssetList></AssetList></PrivateRoute>
      },
      {
        path: 'add-asset',
        element: <PrivateRoute><AddAsset></AddAsset></PrivateRoute>
      },
      {
        path: 'all-request',
        element: <PrivateRoute><AllRequest></AllRequest></PrivateRoute>
      },
      {
        path: 'custome-request-list',
        element: <PrivateRoute><CustomeRequestList></CustomeRequestList></PrivateRoute>
      }
    ]
  }
]);