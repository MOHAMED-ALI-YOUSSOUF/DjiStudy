import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
// import "./login-page.scss";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import Error404Page from "../pages/errors/error-404";
import Error401Page from "../pages/errors/error-401";
import Signup from "../components/login/Signup";
import ProtectedRoute from "../components/login/ProtectedRoute";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import LoginForm from "../components/login/LoginForm";
import Home from "../components/login/Home";
import LoginPage from "../pages/login-page";
import SignUpPage from "../pages/signup-page";
import SerieS from "../components/series-pages/serie-s";
import LoginLayout from "../layouts/login-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "series/s/maths",
        element: <SerieS />,
      },
  
      {
        path: "unauthorized",
        element: <Error401Page />,
      },
      {
        path: "*",
        element: <Error404Page />,
      },
    ],
  },
  // {
  
  //   path: "/",
  //   element:<LoginLayout /> ,
  //   children:[
  //     {
  //       path: "login",
  //       element : <LoginPage/>,
  //   },
  //   {
  //     path: "signup",
  //     element: <SignUpPage />,
  //   },
  // ]
  // },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
