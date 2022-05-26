import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ children }) {
	return localStorage.getItem('token') ? <Navigate to="/" /> : children || <Outlet />;
}

export default PrivateRoute;
