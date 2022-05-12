import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import MyPage from 'pages/MyPage';
import ProfileImg from 'pages/ProfileImg';
import { ReadContent } from 'pages/Read';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Story from './components/Story';
import Read from './pages/Read';
import Writing from './pages/Writing';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/my-page" element={<MyPage />} />
				<Route path="/auth/login" element={<Login />} />
				<Route path="/auth/signup" element={<SignUp />} />
				<Route path="/Story" element={<Story />} />
				<Route path="/Read/:id" element={<ReadContent />} />
				<Route path="/Writing" element={<Writing />} />
				<Route path="/my-page/profileImg" element={<ProfileImg />} />
			</Routes>
		</div>
	);
}

export default App;
