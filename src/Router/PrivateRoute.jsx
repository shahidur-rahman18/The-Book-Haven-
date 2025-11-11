import React, { use } from 'react';
import { AuthContext } from "../context/AuthContext";
import { Navigate } from 'react-router';
import { PropagateLoader } from 'react-spinners';

const PrivateRoute = ({children }) => {
    const { user, loading } = use(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PropagateLoader color="#842A3B" size={20} speedMultiplier={1.3} />
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;