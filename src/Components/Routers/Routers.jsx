import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Login/Register/Register";
import MainLayout from "../MainLayOut/MainLayout";
import Details from "../Details/Details";
import Error from "../Error/Error";
import PrivateRoute from "../ParivateRoute/PrivateRoute";
import Service from "../Service/Service";
import Profile from "../Profile/Profile";
import Forget from "../Forget/Forget";
import Contract from "../Contracts/Contract";

const Routers = createBrowserRouter([
    { 
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>
    },
    {
        path:'/forget',
        element:<Forget></Forget>
    },
    {
        path:'/profile',
        element:<Profile></Profile>
    },
    {
        path:'/service',
        element:<Service></Service>
    },
    {
        path:'/login',
        
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/contract',
        element:<Contract></Contract>
    },
    {
        path: '/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: async () => {
          const response = await fetch('/PublicData.json'); 
          return response.json();
        },
      },
    
])
export default Routers;