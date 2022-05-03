import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from 'styles/GlobalStyles';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
	<GlobalStyles />;
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/signUp" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
