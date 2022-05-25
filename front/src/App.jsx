import React, { useEffect, useState } from 'react';
import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import PrivateRoute from 'utils/PrivateRoute';
import PublicRoute from 'utils/PublicRoute';

import MyPage from 'pages/MyPage';
import profile from 'public/profile.jpg';
import NavBar from 'components/NavBar';
import NavBar2 from 'components/NavBar2';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Read from './pages/Read';
import Writing from './pages/Writing';
import WritePut from './pages/WritePut';

function App() {
	const navigate = useNavigate();

	const [imgSrc, setImgSrc] = useState(profile);
	const [nickname, setNickname] = useState('');
	const [description, setDescription] = useState('');
	const [searchKeyword, setSearchKeyword] = useState('');
	const [searchWritings, setSearchWritings] = useState();
	const [email, setEmail] = useState('');

	const isPc = useMediaQuery({ query: '(min-width:1224px)' });
	const isMobile = useMediaQuery({ query: '(max-width:1223px' });

	useEffect(() => {
		if (window.location.pathname === '/circuit' || window.location.pathname === '/circuit/') {
			navigate('/page=1');
		}
	}, []);

	return (
		<div className="App">
			{isPc && (
				<Routes>
					<Route element={<PublicRoute />}>
						<Route path="/auth/login" element={<Login />} />
						<Route path="/auth/signup" element={<SignUp />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route
							element={
								<NavBar
									imgSrc={imgSrc}
									setImgSrc={setImgSrc}
									setNickname={setNickname}
									setEmail={setEmail}
									setDescription={setDescription}
								/>
							}
						>
							<Route
								path="/page=:pageNum"
								element={
									<MainPage
										imgSrc={imgSrc}
										setImgSrc={setImgSrc}
										nickname={nickname}
										setNickname={setNickname}
										searchKeyword={searchKeyword}
										setSearchKeyword={setSearchKeyword}
										searchWritings={searchWritings}
										setSearchWritings={setSearchWritings}
										email={email}
										setEmail={setEmail}
									/>
								}
							/>
							<Route
								path="/search=:keyword"
								element={
									<MainPage
										imgSrc={imgSrc}
										setImgSrc={setImgSrc}
										nickname={nickname}
										setNickname={setNickname}
										searchWritings={searchWritings}
										searchKeyword={searchKeyword}
										setSearchKeyword={setSearchKeyword}
										setSearchWritings={setSearchWritings}
										email={email}
										setEmail={setEmail}
									/>
								}
							/>
						</Route>
						<Route
							element={
								<NavBar2
									imgSrc={imgSrc}
									setImgSrc={setImgSrc}
									setNickname={setNickname}
									setEmail={setEmail}
									setDescription={setDescription}
								/>
							}
						>
							<Route
								path="/user/:id"
								element={
									<MyPage
										imgSrc={imgSrc}
										setImgSrc={setImgSrc}
										nickname={nickname}
										setNickname={setNickname}
										setEmail={setEmail}
										description={description}
										setDescription={setDescription}
									/>
								}
							/>
							<Route
								path="/page=:pageNum/Read=:id"
								element={<Read nickname={nickname} imgSrc={imgSrc} email={email} />}
							/>
							<Route path="/Read=:id" element={<Read nickname={nickname} imgSrc={imgSrc} email={email} />} />
							<Route path="/Writing" element={<Writing nickname={nickname} />} />
							<Route path="/page=:pageNum/Writing=:id" element={<WritePut />} />
							<Route path="/Writing=:id" element={<WritePut />} />
						</Route>
					</Route>
				</Routes>
			)}
			{isMobile && (
				<div className="mobile_container">
					<h1>여긴 너무 작아요 (˘･_･˘)</h1>
					<h2>더 큰 화면으로 봐주세요 !</h2>
				</div>
			)}
		</div>
	);
}

export default App;
