import React from "react";
import { Outlet } from "react-router-dom";
import Spacer from "../components/common/spacer";

const LoginLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-light">
      <Spacer/>
      <Outlet />
      <Spacer/>
      <Spacer/>
    </div>
  );
};

export default LoginLayout;
