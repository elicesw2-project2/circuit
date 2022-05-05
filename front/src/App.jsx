import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MyPage from 'pages/MyPage';
import MainPage from 'pages/MainPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Story from './components/Story';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route path="my-page" element={<MyPage />} />
				<Route path="/Story" element={<Story />} />
			</Routes>
		</div>
	);
}

export default App;
