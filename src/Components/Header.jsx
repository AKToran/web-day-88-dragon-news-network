import React from 'react';
import logo from "../assets/logo.png";
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-2'>
      <img className='w-[400px] mt-8' src={logo} alt="" />
      <p className='text-lg text-accent font-light'>Journalism without fear or favor.</p>
      <p className='font-semibold text-accent'>{format(new Date(), "EEEE, MM MMMM, yyyy")}</p>
    </div>
  );
};

export default Header;