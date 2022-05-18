import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'utils/PrivateRoute';
import PublicRoute from 'utils/PublicRoute';

import MyPage from 'pages/MyPage';
import profile from 'public/profile.jpg';
import NavBar from 'components/NavBar';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Story from './components/Story';
import Read from './pages/Read';
import Writing from './pages/Writing';
import WritePut from './pages/WritePut';

function App() {
	const [imgSrc, setImgSrc] = useState(profile);
	const [nickname, setNickname] = useState('');
	const [searchWritings, setSearchWritings] = useState();
	const [email, setEmail] = useState('');
	console.log(window.location.pathname);
	if (window.location.pathname === '/circuit' || window.location.pathname === '/circuit/') {
		window.location.pathname = '/circuit/page=1';
	}
	return (
		<div className="App">
			<Routes>
				<Route element={<PublicRoute />}>
					<Route path="/auth/login" element={<Login />} />
					<Route path="/auth/signup" element={<SignUp />} />
				</Route>
				<Route element={<PrivateRoute />}>
					<Route element={<NavBar imgSrc={imgSrc} setImgSrc={setImgSrc} />}>
						<Route
							path="/"
							element={
								<MainPage
									imgSrc={imgSrc}
									setImgSrc={setImgSrc}
									nickname={nickname}
									setNickname={setNickname}
									searchWritings={searchWritings}
									setSearchWritings={setSearchWritings}
									email={email}
									setEmail={setEmail}
								/>
							}
						/>
						<Route
							path="/my-page"
							element={
								<MyPage
									imgSrc={imgSrc}
									setImgSrc={setImgSrc}
									nickname={nickname}
									setNickname={setNickname}
									setEmail={setEmail}
								/>
							}
						/>
						<Route
							path="/page=:pageNum"
							element={
								<MainPage
									imgSrc={imgSrc}
									setImgSrc={setImgSrc}
									nickname={nickname}
									setNickname={setNickname}
									searchWritings={searchWritings}
									setSearchWritings={setSearchWritings}
									email={email}
									setEmail={setEmail}
								/>
							}
						/>
						{/* <Route path="/Story" element={<Story qwer={qwer} setqwer={setqwer} />} /> */}
						<Route
							path="/page=:pageNum/Read=:id"
							element={<Read nickname={nickname} imgSrc={imgSrc} email={email} />}
						/>
						<Route path="/Writing" element={<Writing nickname={nickname} />} />
						<Route path="/Writing/:id" element={<WritePut />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
