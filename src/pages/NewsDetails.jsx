import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/homeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [news, setNews] = useState({});

  useEffect(()=>{
    const newsDetails = data.find(singleNews => singleNews.id == id);
    setNews(newsDetails);
  },[data, id]);

  return (
    <div>
      <header>
        <Header/>
      </header>
      <main className='mt-8 w-11/12 mx-auto grid grid-cols-12 gap-4'>
        <section className='col-span-9'>
          <NewsDetailsCard news={news} />
        </section>
        <aside className='col-span-3'>
          <RightAside/>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;