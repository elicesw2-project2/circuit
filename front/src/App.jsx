import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import MyPage from 'pages/MyPage';
import ProfileImg from 'pages/ProfileImg';
import { ReadContent } from 'pages/Read';
import profile from 'public/profile.jpg';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Story from './components/Story';
import Read from './pages/Read';
import Writing from './pages/Writing';

function App() {
	const [imgSrc, setImgSrc] = useState(profile);
	const [nickname, setNickname] = useState('별명');
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainPage imgSrc={imgSrc} setImgSrc={setImgSrc} nickname={nickname} />} />
				<Route
					path="/my-page"
					element={<MyPage imgSrc={imgSrc} setImgSrc={setImgSrc} nickname={nickname} setNickname={setNickname} />}
				/>
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
