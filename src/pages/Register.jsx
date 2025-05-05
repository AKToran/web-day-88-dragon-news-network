import React from 'react';
import { Link } from "react-router";


const Register = () => {
  return (
    <div className="flex justify-center pb-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl px-8">
        <h2 className="text-center text-2xl font-semibold pt-8">Create an Account</h2>
        <div className="card-body">
          <form className="fieldset">

            {/* name */}
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" />
            {/* url */}
            <label className="label">Photo URL</label>
            <input type="text" name="url" className="input" placeholder="Photo URL" />
            {/* email */}
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />

            {/* password */}
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Create</button>
            <p className="font-semibold text-center py-4">Already have an account? <Link className="text-blue-500 underline" to={'/auth/login'}>Login</Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;