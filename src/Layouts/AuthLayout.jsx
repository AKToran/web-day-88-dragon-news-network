import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen px-20">
      <header className="py-8">
        <Navbar />
      </header>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
