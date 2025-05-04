import React from 'react';
import { NavLink } from 'react-router';
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className=""></div>
      <div className="nav flex gap-4 text-accent text-lg *:p-2 *:px-4">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-2">
        <img className='' src={userIcon} alt="" />
        <button className='btn px-10 rounded-none text-base-100 bg-primary '>Login</button>
      </div>
    </div>
  );
};

export default Navbar;