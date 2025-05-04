import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header/>
        <section className='my-3'>
          <LatestNews/>
        </section>
        <nav>
          <Navbar/>
        </nav>
      </header>

      <main>
        <section className="left-nav"></section>
        <section className="main">
          <Outlet/>
        </section>
        <section className="right-nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;