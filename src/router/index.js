import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import Error404Page from "../pages/errors/error-404";
import Error401Page from "../pages/errors/error-401";
import Serie from "../components/series-pages/serie-s/serie";
import SerieEs from "../components/series-pages/serie-s/serieEs";
import SerieL from "../components/series-pages/serie-s/serieL";
import SerieStg from "../components/series-pages/serie-s/serieStg";

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
        path: "series/s",
        element: <Serie />,
      },
      {
        path: "series/es",
        element: <SerieEs />,
      },
      {
        path: "series/stg",
        element: <SerieStg />,
      },
      {
        path: "series/l",
        element: <SerieL />,
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
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
