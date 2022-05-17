import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ children }) {
	return localStorage.getItem('token') ? children || <Outlet /> : <Navigate to="/auth/login" />;
}

export default PrivateRoute;
