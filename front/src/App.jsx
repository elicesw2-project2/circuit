import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MyPage from 'pages/MyPage';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Story from './components/Story';
import Read from './pages/Read';
import MainPage from './pages/MainPage';
import Comment from './components/Comment';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route path="/Story" element={<Story />} />
				<Route path="/Read/:id" element={<Read />} />
				<Route path="/MainPage" element={<MainPage />} />
				<Route path="/comment" element={<Comment />} />
			</Routes>
		</div>
	);
}

export default App;
