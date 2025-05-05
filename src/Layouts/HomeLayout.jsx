import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/homeLayout/LeftAside";
import RightAside from "../Components/homeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="my-4">
          <LatestNews />
        </section>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main className="mt-8 grid grid-cols-12 gap-4">
        <aside className="left-aside col-span-3">
          <LeftAside />
        </aside>
        <section className="child-component col-span-6">
          <Outlet />
        </section>
        <aside className="right-aside col-span-3 justify-self-end">
          <RightAside/>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
