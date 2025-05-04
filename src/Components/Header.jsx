import React from 'react';
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-2'>
      <img src={logo} alt="" />
      <p className='text-xl text-gray-600 font-light'>Journalism without fear or favor.</p>
    </div>
  );
};

export default Header;