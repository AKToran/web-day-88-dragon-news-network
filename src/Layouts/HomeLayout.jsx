import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/homeLayout/LeftAside";
import RightAside from "../Components/homeLayout/RightAside";

const HomeLayout = () => {
  const { state } = useNavigation();

  return (
    <div className="w-11/12 mx-auto">
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
        <aside className="left-aside h-fit sticky top-4 col-span-3">
          <LeftAside />
        </aside>
        <section className="child-component col-span-6">
          {state == "loading" ? (
            <div className="py-20 flex justify-center items-center">
              <span className="loading loading-dots loading-xl"></span>
            </div>
          ) : (
            <Outlet />
          )}
        </section>
        <aside className="right-aside col-span-3 justify-self-end">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
