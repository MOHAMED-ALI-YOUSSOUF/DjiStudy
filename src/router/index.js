import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import Error404Page from "../pages/errors/error-404";
import Error401Page from "../pages/errors/error-401";

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
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "unauthorized",
        element: <Error401Page/>
      },
      {
        path: '*',
        element: <Error404Page />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
