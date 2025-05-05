import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";

const Login = () => {
  const { loginUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
    .then(result =>{
      setUser(result.user);
      navigate('/');
    })
    .catch(err =>{
      alert(err.message);
    })
  }

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <h2 className="text-center text-2xl font-semibold pt-8">Login to your Account</h2>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center py-4">Don't have an account? <Link className="text-blue-500 underline" to={'/auth/register'}>Register</Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
