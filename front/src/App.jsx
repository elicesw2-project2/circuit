import React, { useEffect } from 'react';
import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import PrivateRoute from 'utils/Routes/PrivateRoute';
import PublicRoute from 'utils/Routes/PublicRoute';

import MyPage from 'pages/MyPage';
import NavBar from 'components/NavBar/NavBar';
import NavBar2 from 'components/NavBar/NavBar2';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Read from './pages/Read';
import Writing from './pages/Writing';
import WritePut from './pages/WritePut';

function App() {
	const navigate = useNavigate();

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
						<Route element={<NavBar />}>
							<Route path="/page=:pageNum" element={<MainPage />} />
							<Route path="/search=:keyword" element={<MainPage />} />
						</Route>
						<Route element={<NavBar2 />}>
							<Route path="/user/:id" element={<MyPage />} />
							<Route path="/page=:pageNum/Read=:id" element={<Read />} />
							<Route path="/Read=:id" element={<Read />} />
							<Route path="/Writing" element={<Writing />} />
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
