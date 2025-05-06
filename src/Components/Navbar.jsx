import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png";
import { AuthContext } from '../provider/AuthContext';

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  const photo = user?.photoURL;
  
  const handleLogout = () =>{
    logOutUser()
    .then(()=>{
      alert("log out successful");
    })
    .catch(err=>{
      alert(err.message);
    })
  }

  return (
    <div className='flex justify-between items-center'>
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-4 text-accent text-lg *:p-2 *:px-4">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-2">
        <img className='w-10 rounded-full' src={ photo || userIcon} alt="user photo" />
        {
          user? <Link to={'/'} onClick={handleLogout} className='btn px-10 rounded-none text-base-100 bg-primary '>LogOut</Link> : <Link to={'/auth/login'} className='btn px-10 rounded-none text-base-100 bg-primary '>Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;