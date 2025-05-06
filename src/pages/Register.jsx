import React, { use } from 'react';
import { Link } from "react-router";
import { AuthContext } from '../provider/AuthContext';


const Register = () => {
  const { registerUser, setUser, updateUser } = use(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    registerUser(email, password)
    .then(result =>{
      const user = result.user;
      const updatedData = {
        displayName: name,
        photoURL: photo
      }
      updateUser(updatedData)
      .then(() => {
        setUser({...user, ...updatedData});
      })
      .catch(err => {
        alert(err)
        setUser(user);
      })
    })
    .catch(err =>{
      alert(err.message);
    })
  };

  return (
    <div className="flex justify-center pb-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl px-8">
        <h2 className="text-center text-2xl font-semibold pt-8">
          Create an Account
        </h2>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />
            {/* url */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="url"
              className="input"
              placeholder="Photo URL"
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password" 
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Create
            </button>
            <p className="font-semibold text-center py-4">
              Already have an account?{" "}
              <Link className="text-blue-500 underline" to={"/auth/login"}>
                Login
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
