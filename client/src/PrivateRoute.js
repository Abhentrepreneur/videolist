import React from 'react';
import { useAuth } from './authContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const { auth } = useAuth();

  return auth ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
