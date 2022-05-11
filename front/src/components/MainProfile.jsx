import React from 'react';
import profile from 'public/profile.jpeg';
import '../styles/MainProfile.scss';
import Logout from 'utils/Logout';
import { Link } from 'react-router-dom';

function MainProfile() {
	return (
		<div className="MainProfile">
			<img src={profile} alt="profile" />
			<button type="button">
				<Link to="/my-page">마이페이지</Link>
			</button>
			<button type="button" onClick={Logout}>
				<Link to="/login">로그아웃</Link>
			</button>
		</div>
	);
}

export default MainProfile;
