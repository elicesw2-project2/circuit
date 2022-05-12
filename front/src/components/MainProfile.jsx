import React from 'react';
import '../styles/MainProfile.scss';
import { Link } from 'react-router-dom';

function MainProfile({ imgSrc, nickname }) {
	return (
		<div className="MainProfile">
			<Link to="/my-page">
				<img src={imgSrc} alt="profile" />
			</Link>
			<h2>{nickname}</h2>
			<span>elice123@gmail.com</span>
			{/* <button type="button">
				<Link to="/my-page">마이페이지</Link>
			</button>
			<button type="button" onClick={Logout}>
				<Link to="/login">로그아웃</Link>
			</button> */}
		</div>
	);
}

export default MainProfile;
