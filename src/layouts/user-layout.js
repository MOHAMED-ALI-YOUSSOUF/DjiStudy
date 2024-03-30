import React from "react";
import Menubar from "../components/common/menubar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/common/footer";
import Spacer from "../components/common/spacer";
import ScrollToTopButton from "../components/common/scroll-to-top-button";

const UserLayout = () => {
  return (
    <>
      <Menubar />
      <Outlet />
      <Spacer/>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default UserLayout;
