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
	return (
		<div className="App">
			<NavBar imgSrc={imgSrc} setImgSrc={setImgSrc} setSearchWritings={setSearchWritings} />
			<Routes>
				<Route
					path="/auth/login"
					element={
						<PublicRoute>
							<Login />
						</PublicRoute>
					}
				/>
				<Route
					path="/auth/signup"
					element={
						<PublicRoute>
							<SignUp />
						</PublicRoute>
					}
				/>
				<Route
					path="/"
					element={
						<PrivateRoute>
							<MainPage
								imgSrc={imgSrc}
								setImgSrc={setImgSrc}
								nickname={nickname}
								setNickname={setNickname}
								searchWritings={searchWritings}
								email={email}
								setEmail={setEmail}
							/>
						</PrivateRoute>
					}
				/>
				<Route
					path="/my-page"
					element={
						<PrivateRoute>
							<MyPage
								imgSrc={imgSrc}
								setImgSrc={setImgSrc}
								nickname={nickname}
								setNickname={setNickname}
								setEmail={setEmail}
							/>
						</PrivateRoute>
					}
				/>
				<Route
					path="/Story"
					element={
						<PrivateRoute>
							<Story />
						</PrivateRoute>
					}
				/>
				<Route
					path="/Read/:id"
					element={
						<PrivateRoute>
							<Read nickname={nickname} imgSrc={imgSrc} email={email} />
						</PrivateRoute>
					}
				/>
				<Route
					path="/Writing"
					element={
						<PrivateRoute>
							<Writing nickname={nickname} />
						</PrivateRoute>
					}
				/>

				<Route
					path="/Writing/:id"
					element={
						<PrivateRoute>
							<WritePut />
						</PrivateRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
