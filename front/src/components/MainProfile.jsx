import React from 'react';
import profile from 'public/profile.jpeg';
import '../styles/MainProfile.scss';

function MainProfile() {
	return (
		<div className="MainProfile">
			<img src={profile} alt="profile" />
			<button type="button">마이 페이지</button>
			<button type="button">로그아웃</button>
		</div>
	);
}

export default MainProfile;
