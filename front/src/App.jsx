import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import MyPage from 'pages/MyPage';
import profile from 'public/profile.jpg';
import NavBar from 'components/NavBar';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Story from './components/Story';
import Read from './pages/Read';
import Writing from './pages/Writing';

function App() {
	const [imgSrc, setImgSrc] = useState(profile);
	const [nickname, setNickname] = useState('별명');
	const [searchWritings, setSearchWritings] = useState();
	return (
		<div className="App">
			<NavBar imgSrc={imgSrc} setImgSrc={setImgSrc} setSearchWritings={setSearchWritings} />
			<Routes>
				<Route path="/" element={<MainPage imgSrc={imgSrc} nickname={nickname} searchWritings={searchWritings} />} />
				<Route path="/auth/login" element={<Login />} />
				<Route path="/auth/signup" element={<SignUp />} />
				<Route
					path="/my-page"
					element={<MyPage imgSrc={imgSrc} setImgSrc={setImgSrc} nickname={nickname} setNickname={setNickname} />}
				/>
				<Route path="/Story" element={<Story />} />
				<Route path="/Read/:id" element={<Read />} />
				<Route path="/Writing" element={<Writing />} />
			</Routes>
		</div>
	);
}

export default App;
