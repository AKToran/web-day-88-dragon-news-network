import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthContext";
import Loader from "../pages/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <Loader></Loader>
    );
  }

  if (!user) {
    return <Navigate to={"/auth/login"} state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
