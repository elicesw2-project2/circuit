import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
	return localStorage.getItem('id') ? <Navigate to="/" /> : children;
}

export default PrivateRoute;
