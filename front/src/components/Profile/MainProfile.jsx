import React from 'react';
import 'styles/Profile/MainProfile.scss';
import { Link } from 'react-router-dom';

function MainProfile({ imgSrc, nickname, email }) {
	return (
		<div className="MainProfile">
			<Link to={`/user/${localStorage.getItem('id')}`}>
				<img src={imgSrc} alt="profile" />
			</Link>
			<h2>{nickname}</h2>
			<span>{email}</span>
		</div>
	);
}

export default MainProfile;
