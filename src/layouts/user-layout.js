import React from "react";
import Menubar from "../components/common/menubar"
import { Outlet, useLocation } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Menubar />
      <Outlet />
      {/* <Footer /> */}
      {/* <ScrollToTopButton /> */}
    </>
  );
};

export default UserLayout;
