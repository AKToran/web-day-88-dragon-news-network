import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className='flex items-center gap-2 bg-base-200 p-3'>
      <p className='text-base-100 px-2 py-1 bg-secondary'>Latest</p>
      <Marquee pauseOnHover={true} speed={40} className='flex gap-4'><p className='font-bold'>Match Highlights: Germany vs Spain — as it happened.</p></Marquee>
      
    </div>
  );
};

export default LatestNews;