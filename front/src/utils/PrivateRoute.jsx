import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
	return localStorage.getItem('id') ? children : <Navigate to="/auth/login" />;
}

export default PrivateRoute;
